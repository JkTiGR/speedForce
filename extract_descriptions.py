import asyncio, json, os, re, unicodedata, difflib
from typing import Dict, List, Tuple
from playwright.async_api import async_playwright

URL = "https://www.pyszne.pl/menu/ha-linh-warszawa-wolska"

KEYS = [
    "ALOES.png","BIALY_RYZ.png","CHIPSY_KREWETKOWE.png","COLA_0_5L.png","FANTA_0_5L.png",
    "FILET_PIECZONY.png","FILET_PIECZONY_Z_WARZYWAMI.png","FRYTKI.png","GOLONKA_5_SMAKOW.png",
    "GOLONKA_PO_CHINSKU.png","GOLONKA_W_SOSIE_CURRY.png","GOLONKA_Z_GORACEGO_POLMISKA.png",
    "KACZKA_5_SMAKOW.png","KACZKA_CHRUPIACA_Z_WARZYWAMI.png","KACZKA_PO_CHINSKU.png",
    "KACZKA_PO_SYCZUANSKU.png","KACZKA_SLODKO_KWASNA.png","KACZKA_W_SOSIE_CURRY.png",
    "KACZKA_Z_GORACEGO_POLMISKA.png","KALMARY_5_SMAKOW.png","KALMARY_W_SOSIE_CURRY.png",
    "KALMARY_Z_GORACEGO_POLMISKA.png","KREWETKI_5_SMAKOW.png","KREWETKI_PO_CHINSKU.png",
    "KREWETKI_W_SOSIE_CURRY.png","KREWETKI_Z_GORACEGO_POLMISKA.png","KURCZAK_5_SMAKOW.png",
    "KURCZAK_CHRUPIACY.png","KURCZAK_HA_LINH.png","KURCZAK_PO_CHINSKU.png",
    "KURCZAK_PO_SYCZUANSKU.png","KURCZAK_SMAZONY_Z_WARZYWAMI.png","KURCZAK_W_CIESCIE_KOKOSOWYM.png",
    "KURCZAK_W_SEZAMIE_SMAZONY.png","KURCZAK_W_SOSIE_CURRY.png","KURCZAK_Z_GORACEGO_POLMISKA.png",
    "KURCZAK_SPECJALNY.png","MAKARON.png","MAKARON_CHINSKI_SMAZONY.png","MAKARON_SOJOWY.png",
    "MAKARON_SOJOWY_SMAZONY.png","MAKARON_SOJOWY_Z_WARZYWAMI.png","MAKARON_SMAZONY_Z_WARZYWAMI.png",
    "MAKARON_UDON_Z_KREWETKAMI.png","MAKARON_UDON_Z_KURCZAKIEM.png","MAKARON_UDON_Z_KURCZAKIEM_PIECZONYM.png",
    "MAKARON_UDON_Z_TOFU.png","MAKARON_UDON_Z_WOLOWINA.png","MIX_WARZYW_SMAZONY.png",
    "PAD_THAI_Z_KREWETKAMI.png","PAD_THAI_Z_KURCZAKIEM.png","PAD_THAI_Z_TOFU.png","PAD_THAI_Z_WOLOWINA.png",
    "PIWO.png","RYBA_CHRUPIACA.png","RYZ_SMAZONY_Z_KACZKA.png","RYZ_SMAZONY_Z_KREWETKAMI.png",
    "RYZ_SMAZONY_Z_KURCZAKIEM.png","RYZ_SMAZONY_Z_TOFU.png","RYZ_SMAZONY_Z_WARZYWAMI.png",
    "RYZ_SMAZONY_Z_WIEPRZOWINA.png","RYZ_SMAZONY_Z_WOLOWINA.png","SMAZONY_RYZ.png","SOK_POMARANCZOWY.png",
    "SPRITE_0_5L.png","SUROWKA.png","SAJGONKI_WIEPRZOWE_3_SZT.png","SAJGONKI_WEGETARIANSKIE.png",
    "SAJGONKI_Z_SUROWKA_I_RYZEM.png","TOFU_5_SMAKOW.png","TOFU_CURRY.png","TOFU_Z_WARZYWAMI.png",
    "WARZYWA_SMAZONE.png","WIEPRZOWINA_5_SMAKOW.png","WIEPRZOWINA_PO_CHINSKU.png",
    "WIEPRZOWINA_W_SOSIE_CURRY.png","WIEPRZOWINA_Z_GORACEГО_POLMISKA.png".replace("ЕГО","EGO"),
    "WODA_0_3L.png","WODA_GAZOWANA_0_3L.png","WOLOWINA_5_SMAKOW.png","WOLOWINA_PO_CHINSKU.png",
    "WOLOWINA_PO_SYCZUANSKU.png","WOLOWINA_W_SOSIE_CURRY.png","WOLOWINA_Z_GORACEГО_POLMISKA.png".replace("ЕГО","EGO"),
    "ZUPA_KREWETKOWA_PO_CHINSKU.png","ZUPA_KWASNO_PIKANTNA_Z_KURCZAKIEM.png",
    "ZUPA_PO_TAJSKU_Z_KREWETKAMI.png","ZUPA_PO_TAJSKU_Z_KURCZAKIEM.png","ZUPA_PHO_Z_KURCZAKIEM.png","ZUPA_PHO_Z_WOLOWINA.png",
    "ZUPA_TOM_KHA_GAI_Z_KREWETKAMI.png","ZUPA_TOM_KHA_GAI_Z_KURCZAKIEM.png","ZUPA_WONTON.png",
    "ROSOL_Z_MAKARONEM_SOJOWYM_I_KURCZAKIEM.png"
]

def slugify(s: str) -> str:
    s = s.strip()
    s = unicodedata.normalize("NFKD", s)
    s = s.encode("ascii", "ignore").decode("ascii")
    s = re.sub(r"[^A-Za-z0-9]+", "_", s)
    s = re.sub(r"_+", "_", s).strip("_")
    return s.upper()

def best_match(key_base: str, titles_norm: List[str]) -> Tuple[int, float]:
    # точное вхождение сначала
    for i, t in enumerate(titles_norm):
        if key_base in t or t in key_base:
            return i, 1.0
    # затем fuzzy
    ratios = [(i, difflib.SequenceMatcher(None, key_base, t).ratio()) for i, t in enumerate(titles_norm)]
    ratios.sort(key=lambda x: x[1], reverse=True)
    return ratios[0] if ratios else (-1, 0.0)

async def accept_cookies(page):
    texts = ["Akceptuj", "Zaakceptuj", "Akceptuj wszystkie", "Accept", "OK", "Rozumiem"]
    for t in texts:
        try:
            await page.get_by_role("button", name=re.compile(t, re.I)).click(timeout=1200)
            return
        except:
            pass

async def click_load_more(page):
    labels = ["Pokaż więcej", "Więcej", "Show more", "Load more", "Zobacz więcej"]
    for _ in range(10):
        clicked = False
        for lab in labels:
            try:
                btn = page.get_by_role("button", name=re.compile(lab, re.I))
                if await btn.is_visible():
                    await btn.click()
                    await page.wait_for_timeout(700)
                    clicked = True
            except:
                pass
        if not clicked:
            break

async def scroll_all(page, rounds=40, pause=300):
    for _ in range(rounds):
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        await page.wait_for_timeout(pause)
    # прокрутить все скролл-контейнеры
    await page.evaluate("""
      const els = Array.from(document.querySelectorAll('*'));
      for (const el of els) {
        const cs = getComputedStyle(el);
        const oy = cs.overflowY;
        if ((oy === 'auto' || oy === 'scroll') && el.scrollHeight > el.clientHeight) {
          el.scrollTop = el.scrollHeight;
        }
      }
    """)

JS_EXTRACT = """
(() => {
  // Пытаемся собрать пары {title, desc} из карточек меню
  const out = [];
  const cards = Array.from(document.querySelectorAll('[class*="menu"], [data-qa*="product"], [class*="product"]'));
  function clean(t) {
    return (t||"").replace(/\\s+/g,' ').trim();
  }
  const seenTitles = new Set();

  function pushIf(titleEl, descEl) {
    const title = clean(titleEl ? titleEl.textContent : "");
    let desc = clean(descEl ? descEl.textContent : "");
    if (!title) return;
    // иногда описание прячется глубже
    if (!desc && titleEl && titleEl.parentElement) {
      const dd = titleEl.parentElement.querySelector('p, [class*="desc"], [data-qa*="description"]');
      if (dd) desc = clean(dd.textContent);
    }
    if (!desc && descEl && descEl.parentElement) {
      const dd = descEl.parentElement.querySelector('p, [class*="desc"], [data-qa*="description"]');
      if (dd) desc = clean(dd.textContent);
    }
    if (!seenTitles.has(title)) {
      out.push({title, desc});
      seenTitles.add(title);
    }
  }

  // общие хедеры/подзаголовки
  cards.forEach(c => {
    const title = c.querySelector('h3, h4, [data-qa*="title"], [class*="title"]');
    const desc  = c.querySelector('p, [class*="desc"], [data-qa*="description"]');
    if (title) pushIf(title, desc);
  });

  // запасные варианты (вне cards)
  const titles = Array.from(document.querySelectorAll('h3, h4')).filter(h => h.textContent.trim().length>1);
  titles.forEach(t => {
    const sib = t.parentElement ? t.parentElement.querySelector('p, [class*="desc"], [data-qa*="description"]') : null;
    pushIf(t, sib);
  });

  return out;
})()
"""

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True, args=["--no-sandbox"])
        ctx = await browser.new_context(
            locale="pl-PL",
            timezone_id="Europe/Warsaw",
            user_agent=("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36"),
            viewport={"width": 1440, "height": 1000}
        )
        page = await ctx.new_page()
        await page.goto(URL, wait_until="domcontentloaded", timeout=90000)
        await accept_cookies(page)
        try:
            await page.wait_for_selector("img, h3", timeout=60000)
        except:
            pass
        await click_load_more(page)
        await scroll_all(page, rounds=50, pause=250)

        items = await page.evaluate(JS_EXTRACT)
        await ctx.close(); await browser.close()

    # нормализованные тайтлы
    titles = [i["title"] for i in items if i.get("title")]
    descs  = [i.get("desc","") for i in items if i.get("title")]
    titles_norm = [slugify(t) for t in titles]

    # строим описание по KEY
    result: Dict[str, str] = {}
    used_idx = set()
    for key in KEYS:
        base = os.path.splitext(key)[0]
        key_norm = slugify(base)
        idx, score = best_match(key_norm, titles_norm)
        if idx != -1 and score >= 0.55 and idx not in used_idx:
            result[key] = descs[idx] or ""
            used_idx.add(idx)
        else:
            # fallback: ещё попытка — ближайший неиспользованный
            if idx != -1:
                for alt_idx in sorted(range(len(titles_norm)), key=lambda j: difflib.SequenceMatcher(None, key_norm, titles_norm[j]).ratio(), reverse=True):
                    if alt_idx not in used_idx and difflib.SequenceMatcher(None, key_norm, titles_norm[alt_idx]).ratio() >= 0.5:
                        result[key] = descs[alt_idx] or ""
                        used_idx.add(alt_idx)
                        break
            if key not in result:
                result[key] = ""  # не нашли — пусто

    with open("descriptions.json", "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    # отчёт в консоль
    filled = sum(1 for v in result.values() if v)
    print(f"Готово: descriptions.json (заполнено {filled}/{len(result)}).")
    # подсказка по проблемным
    missing = [k for k, v in result.items() if not v]
    if missing:
        print("Без описаний:", ", ".join(missing[:10]), ("..." if len(missing)>10 else ""))

if __name__ == "__main__":
    asyncio.run(main())
