import asyncio, json, os, re, unicodedata, difflib
from typing import Dict, List, Tuple
from playwright.async_api import async_playwright

URL = "https://www.pyszne.pl/menu/ha-linh-warszawa-wolska"

KEYS = [
    "ALOES.png","BIALY_RYZ.png","CHIPSY_KREWETKOWE.png","COLA_0_5L.png","FANTA_0_5L.png",
    "FILET_PIECZONY.png","FILET_PIECZONY_Z_WARZYWAMI.png","FRYTKI.png","GOLONKA_5_SMAKOW.png",
    "GOLONKA_PO_CHINSKU.png","GOLONKA_W_SOSIE_CURRY.png","GOLONKA_Z_GORACEGO_POLMISKA.png",
    "KACZKA_5_SMAKOW.png","KACZKA_CHRUPIACA_Z_WARZYWAMI.png","KACZKA_PO_CHINSKU.png",
    "KACZKA_PO_SYCZUANSKU.png","КACZKA_SLODKO_KWASNA.png".replace("К","K"),"KACZKA_W_SOSIE_CURRY.png",
    "KACZKA_Z_GORACEGO_POLMISKA.png","KALMARY_5_SMAKOW.png","KALMARY_W_SOSIE_CURRY.png",
    "KALMARY_Z_GORACEGO_POLMISKA.png","KREWETKI_5_SMAKOW.png","KREWETKI_PO_CHINSKU.png",
    "KREWETKI_W_SOSIE_CURRY.png","KREWETKI_Z_GORACEGO_POLMISKA.png","KURCZAK_5_SMAKOW.png",
    "KURCZAK_CHRUPIACY.png","KURCZAK_HA_LINH.png","KURCZAK_PO_CHINSKU.png",
    "KURCZAK_PO_SYCZUANSKU.png","KURCZAK_SMAZONY_Z_WARZYWAMI.png","KURCZAK_W_CIESCIE_KOKOSOWYM.png",
    "KURCZAK_W_SEZAMIE_SMAZONY.png","KURCZAK_W_SOSIE_CURRY.png","KURCZAK_Z_GORACEГО_POLMISKA.png".replace("ГО","GO"),
    "KURCZAK_SPECJALNY.png","MAKARON.png","MAKARON_CHINSKI_SMAZONY.png","MAKARON_SOJOWY.png",
    "MAKARON_SOJOWY_SMAZONY.png","MAKARON_SOJOWY_Z_WARZYWAMI.png","MAKARON_SMAZONY_Z_WARZYWAMI.png",
    "MAKARON_UDON_Z_KREWETKAMI.png","MAKARON_UDON_Z_KURCZAKIEM.png","MAKARON_UDON_Z_KURCZAKИЕМ_PIECZONYM.png".replace("И","I"),
    "MAKARON_UDON_Z_TOFU.png","MAKARON_UDON_Z_WOLOWINA.png","MIX_WARZYW_SMAZONY.png",
    "PAD_THAI_Z_KREWETKAMI.png","PAD_THAI_Z_KURCZAKIEM.png","PAD_THAI_Z_TOFU.png","PAD_THAI_Z_WOLOWINA.png",
    "PIWO.png","RYBA_CHRUPIACA.png","RYZ_SMAZONY_Z_KACZKA.png","RYZ_SMAZONY_Z_KREWETKAMI.png",
    "RYZ_SMAZONY_Z_KURCZAKIEM.png","RYZ_SMAZONY_Z_TOFU.png","RYZ_SMAZONY_Z_WARZYWAMI.png",
    "RYZ_SMAZONY_Z_WIEPRZOWINA.png","RYZ_SMAZONY_Z_WOLOWINA.png","SMAZONY_RYZ.png","SOK_POMARANCZOWY.png",
    "SPRITE_0_5L.png","SUROWKA.png","SAJGONKI_WIEPRZOWE_3_SZT.png","SAJGONKI_WEGETARIANSKIE.png",
    "SAJGONKI_Z_SUROWKA_I_RYZEM.png","TOFU_5_SMAKOW.png","TOFU_CURRY.png","TOFU_Z_WARZYWAMI.png",
    "WARZYWA_SMAZONE.png","WIEPRZOWINA_5_SMAKOW.png","WIEPRZOWINA_PO_CHINSKU.png",
    "WIEPRZOWINA_W_SOSIE_CURRY.png","WIEPRZOWINA_Z_GORACEGO_POLMISKA.png","WODA_0_3L.png",
    "WODA_GAZOWANA_0_3L.png","WOLOWINA_5_SMAKOW.png","WOLOWINA_PO_CHINSKU.png","WOLOWINA_PO_SYCZUANSKU.png",
    "WOLOWINA_W_SOSIE_CURRY.png","WOLOWINA_Z_GORACEГО_POLMISKA.png".replace("ГО","GO"),
    "ZUPA_KREWETKOWA_PO_CHINSKU.png","ZUPA_KWASNO_PIKANTNA_Z_KURCZAKIEM.png",
    "ZUPA_PO_TAJSKU_Z_KREWETKAMI.png","ZUPA_PO_TAJSKU_Z_KURCZAKIEM.png","ZUPA_PHO_Z_KURCZAKИЕМ.png".replace("И","I"),
    "ZUPA_PHO_Z_WOLOWINA.png","ZUPA_TOM_KHA_GAI_Z_KREWETKAMI.png","ZUPA_TOM_KHA_GAI_Z_KURCZAKIEM.png",
    "ZUPA_WONTON.png","ROSOL_Z_MAKARONEM_SOJOWYM_I_KURCZAKIEM.png"
]

def slugify(s: str) -> str:
    s = unicodedata.normalize("NFKD", s)
    s = s.encode("ascii", "ignore").decode("ascii")
    s = re.sub(r"[^A-Za-z0-9]+", "_", s).strip("_").upper()
    s = re.sub(r"_+", "_", s)
    return s

def best_match(key_base: str, titles_norm: List[str]) -> int:
    # сначала прямые попадания по подстроке
    for i, t in enumerate(titles_norm):
        if key_base in t or t in key_base:
            return i
    # затем fuzzy
    idx = -1; best = 0.0
    for i, t in enumerate(titles_norm):
        r = difflib.SequenceMatcher(None, key_base, t).ratio()
        if r > best:
            best, idx = r, i
    return idx if best >= 0.45 else -1

async def accept_cookies(page):
    for text in ["Akceptuj", "Zaakceptuj", "Akceptuj wszystkie", "Accept", "OK", "Rozumiem"]:
        try:
            await page.get_by_role("button", name=re.compile(text, re.I)).click(timeout=1200)
            break
        except:
            pass

async def expand_all(page):
    # нажать возможные "показать больше"
    for _ in range(10):
        clicked = False
        for lab in ["Pokaż więcej", "Więcej", "Show more", "Load more", "Zobacz więcej"]:
            try:
                btn = page.get_by_role("button", name=re.compile(lab, re.I))
                if await btn.is_visible():
                    await btn.click()
                    await page.wait_for_timeout(700)
                    clicked = True
            except:
                pass
        if not clicked: break
    # прокрутить окно и скролл-контейнеры
    for _ in range(50):
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        await page.wait_for_timeout(250)
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

async def extract_pairs(page):
    # собираем все плитки-товары (гибкие селекторы)
    cards = await page.query_selector_all('[data-qa*="product"], [class*="product"], article, li, div')
    pairs = []
    seen = set()

    for card in cards:
        try:
            # ищем заголовок
            title_el = await card.query_selector('h3, h4, [data-qa*="title"], [class*="title"]')
            if not title_el:
                continue
            title = (await title_el.text_content() or "").strip()
            if not title or title in seen:
                continue

            desc = ""
            # пробуем локальное описание
            for sel in ['[data-qa*="description"]','[class*="desc"]','p']:
                el = await card.query_selector(sel)
                if el:
                    desc = (await el.text_content() or "").strip()
                    if desc: break

            # если нет — кликаем карточку (откроется модалка) и берём описание там
            if not desc:
                try:
                    await title_el.click(timeout=800)
                    # варианты селекторов в модалке
                    modal = await page.wait_for_selector('[role="dialog"], [class*="modal"]', timeout=1500)
                    if modal:
                        for sel in ['[data-qa*="description"]','[class*="desc"]','p']:
                            el = await modal.query_selector(sel)
                            if el:
                                d = (await el.text_content() or "").strip()
                                if d:
                                    desc = d
                                    break
                    # закрыть модалку
                    for sel in ['[aria-label*="close" i]','button:has-text("×")','[class*="close"]','[data-testid*="close"]']:
                        try:
                            btn = await page.query_selector(sel)
                            if btn:
                                await btn.click()
                                break
                        except:
                            pass
                except:
                    pass

            pairs.append((title, desc))
            seen.add(title)
        except:
            continue
    return pairs

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True, args=["--no-sandbox"])
        ctx = await browser.new_context(
            locale="pl-PL",
            timezone_id="Europe/Warsaw",
            user_agent=("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125 Safari/537.36"),
            viewport={"width": 1440, "height": 1000}
        )
        page = await ctx.new_page()
        await page.goto(URL, wait_until="domcontentloaded", timeout=90000)
        await accept_cookies(page)
        try:
            await page.wait_for_selector("h3, h4, img", timeout=60000)
        except:
            pass
        await expand_all(page)

        pairs = await extract_pairs(page)
        await ctx.close(); await browser.close()

    titles = [t for t, _ in pairs]
    descs  = [d for _, d in pairs]
    titles_norm = [slugify(t) for t in titles]

    result: Dict[str, str] = {}
    used = set()
    for key in KEYS:
        base = os.path.splitext(key)[0]
        idx  = best_match(slugify(base), titles_norm)
        if idx != -1 and idx not in used:
            result[key] = descs[idx] or ""
            used.add(idx)
        else:
            result[key] = ""

    with open("descriptions.json", "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    filled = sum(1 for v in result.values() if v)
    print(f"Готово: descriptions.json (заполнено {filled}/{len(result)})")

if __name__ == "__main__":
    asyncio.run(main())
