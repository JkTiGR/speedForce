# ~/speedForce/pyszne_images/pyszne_download_playwright.py
import os, re, zipfile, asyncio
from urllib.parse import urljoin
from playwright.async_api import async_playwright
import aiohttp, aiofiles

URL = "https://www.pyszne.pl/menu/ha-linh-warszawa-wolska?serviceType=delivery&utm_source=google&utm_medium=organic&utm_campaign=foodorder"

KEYS = [
    "ALOES.png","BIALY_RYZ.png","CHIPSY_KREWETKOWE.png","COLA_0_5L.png","FANTA_0_5L.png",
    "FILET_PIECZONY.png","FILET_PIECZONY_Z_WARZYWAMI.png","FRYTKI.png","GOLONKA_5_SMAKOW.png",
    "GOLONKA_PO_CHINSKU.png","GOLONKA_W_SOSIE_CURRY.png","GOLONKA_Z_GORACEGO_POLMISKA.png",
    "KACZKA_5_SMAKOW.png","KACZKA_CHRUPIACA_Z_WARZYWAMI.png","KACZKA_PO_CHINSKU.png",
    "KACZKA_PO_SYCZUANSKU.png","KACZKA_SLODKO_KWASNA.png","KACZKA_W_SOSIE_CURRY.png",
    "KACZKA_Z_GORACEGO_POLMISKA.png","KALMARY_5_SMAKOW.png","KALMARY_W_SOSIE_CURRY.png",
    "KALMARY_Z_GORACEГО_POLMISKA.png".replace("ЕГО","EGO"),
    "KREWETKI_5_SMAKOW.png","KREWETKI_PO_CHINSKU.png","KREWETKI_W_SOSIE_CURRY.png","KREWETKI_Z_GORACEГО_POLMISKA.png".replace("ЕГО","EGO"),
    "KURCZAK_5_SMAKOW.png","KURCZAK_CHRUPIACY.png","KURCZAK_HA_LINH.png","KURCZAK_PO_CHINSKU.png",
    "KURCZAK_PO_SYCZUANSKU.png","KURCZAK_SMAZONY_Z_WARZYWAMI.png","KURCZAK_W_CIESCIE_KOKOSOWYM.png",
    "KURCZAK_W_SEZAMIE_SMAZONY.png","KURCZAK_W_SOSIE_CURRY.png","KURCZAK_Z_GORACEГО_POLMISKA.png".replace("ЕГО","EGO"),
    "KURCZAK_SPECJALNY.png","MAKARON.png","MAKARON_CHINSKI_SMAZONY.png","MAKARON_SOJOWY.png",
    "MAKARON_SOJOWY_SMAZONY.png","MAKARON_SOJOWY_Z_WARZYWAMI.png","MAKARON_SMAZONY_Z_WARZYWAMI.png",
    "MAKARON_UDON_Z_KREWETKAMI.png","MAKARON_UDON_Z_KURCZAKIEM.png","MAKARON_UDON_Z_KURCZAKIEM_PIECZONYM.png",
    "MAKARON_UDON_Z_TOFU.png","MAKARON_UDON_Z_WOLOWINA.png","MIX_WARZYW_SMAZONY.png",
    "PAD_THAI_Z_KREWETKAMI.png","PAD_THAI_Z_KURCZAKIEM.png","PAD_THAI_Z_TOFU.png","PAD_THAI_Z_WOLOWINA.png",
    "PIWO.png","RYBA_CHRUPIACA.png","RYZ_SMAZONY_Z_KACZKA.png","RYZ_SMAZONY_Z_KREWETKAMI.png",
    "RYZ_SMAZONY_Z_KURCZAKIEM.png","RYZ_SMAZONY_Z_TOFU.png","RYZ_SMAZONY_Z_WARZYWAMI.png",
    "RYZ_SMAZONY_Z_WIEPRZOWINA.png","RYZ_SMAZONY_Z_WOLOWINA.png","SMAZONY_RYZ.png","SOK_POMARANCZOWY.png",
    "SPRITE_0_5L.png","SUROWKA.png","SAJGONKI_WIEPRЗОВЕ_3_SZT.png".replace("ЗО","ZO"),
    "SAJGONKI_WEGETARIANSKIE.png","SAJGONKI_Z_SUROWKA_I_RYZEM.png","TOFU_5_SMAKOW.png","TOFU_CURRY.png",
    "TOFU_Z_WARZYWAMI.png","WARZYWA_SMAZONE.png","WIEPRZOWINA_5_SMAKOW.png","WIEPRZOWINA_PO_CHINSKU.png",
    "WIEPRZOWINA_W_SOSIE_CURRY.png","WIEPRZOWINA_Z_GORACEГО_POLMISKA.png".replace("ЕГО","EGO"),
    "WODA_0_3L.png","WODA_GAZOWANA_0_3L.png","WOLOWINA_5_SMAKOW.png","WOLOWINA_PO_CHINSKU.png","WOLOWINA_PO_SYCZUANSKU.png",
    "WOLOWINA_W_SOSIE_CURRY.png","WOLOWINA_Z_GORACEГО_POLMISKA.png".replace("ЕГО","EGO"),
    "ZUPA_KREWETKOWA_PO_CHINSKU.png","ZUPA_KWASNO_PIKANTNA_Z_KURCZAKIEM.png",
    "ZUPA_PO_TAJSKU_Z_KREWETKAMI.png","ZUPA_PO_TAJSKU_Z_KURCZAKIEM.png","ZUPA_PHO_Z_KURCZAKIEM.png","ZUPA_PHO_Z_WOLOWINA.png",
    "ZUPA_TOM_KHA_GAI_Z_KREWETKAMI.png","ZUPA_TOM_KHA_GAI_Z_KURCZAKIEM.png","ZUPA_WONTON.png",
    "ROSOL_Z_MAKARONEM_SOJOWYM_I_KURCZAKIEM.png"
]

OUT_DIR = "pyszne_images"
ZIP_NAME = "pyszne_images.zip"

async def accept_cookies(page):
    texts = ["Akceptuj", "Zaakceptuj", "Akceptuj wszystkie", "Accept", "OK", "Rozumiem"]
    for t in texts:
        try:
            await page.get_by_role("button", name=re.compile(t, re.I)).click(timeout=1200)
            return
        except: pass
    for sel in ["button[aria-label*=accept i]", "button[aria-label*=cookie i]"]:
        try:
            await page.click(sel, timeout=800)
            return
        except: pass

async def scroll_until_stable(page, idle_ms=350, max_rounds=30):
    prev = -1; stable = 0
    for _ in range(max_rounds):
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        await page.wait_for_timeout(idle_ms)
        count = await page.eval_on_selector_all("img", "els => els.length")
        stable = stable + 1 if count == prev else 0
        prev = count
        if stable >= 3: break

async def main():
    os.makedirs(OUT_DIR, exist_ok=True)

    image_urls = []

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True, args=["--no-sandbox"])
        ctx = await browser.new_context(
            locale="pl-PL",
            timezone_id="Europe/Warsaw",
            user_agent=("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
                        "(KHTML, like Gecko) Chrome/125.0 Safari/537.36"),
            viewport={"width": 1366, "height": 900}
        )
        page = await ctx.new_page()

        def is_image_response(resp):
            try:
                ct = resp.headers.get("content-type", "")
                return ct.startswith("image/") or re.search(r"\.(png|jpe?g|webp)(\?|$)", resp.url, re.I)
            except:
                return False

        page.on("response", lambda r: image_urls.append(r.url) if is_image_response(r) else None)

        # Важно: НЕ ждём networkidle
        await page.goto(URL, wait_until="domcontentloaded", timeout=90000)
        await accept_cookies(page)
        try:
            await page.wait_for_selector("img", timeout=60000)
        except:
            pass
        await scroll_until_stable(page, idle_ms=450, max_rounds=40)
        await page.wait_for_timeout(1200)
        await browser.close()

    # Уникализируем и сортируем
    uniq, seen = [], set()
    for u in image_urls:
        if u not in seen:
            seen.add(u); uniq.append(u)
    priority = ("cloudfront", "cloudinary", "images", "media", "pyszne")
    uniq.sort(key=lambda u: (0 if any(k in u.lower() for k in priority) else 1, len(u)))
    print(f"Найдено изображений по сети: {len(uniq)}")

    # Качаем и маппим по порядку к KEYS
    async with aiohttp.ClientSession() as session:
        for i, key in enumerate(KEYS):
            if i >= len(uniq):
                print(f"⚠ Пропущено: {key} — не хватило URL")
                continue
            url = uniq[i]
            path = os.path.join(OUT_DIR, key)
            try:
                async with session.get(url, timeout=40) as r:
                    if r.status == 200:
                        async with aiofiles.open(path, "wb") as f:
                            async for chunk in r.content.iter_chunked(4096):
                                await f.write(chunk)
                        print(f"✔ {key}")
                    else:
                        print(f"⚠ {key}: HTTP {r.status}")
            except Exception as e:
                print(f"❌ {key}: {e}")

    with zipfile.ZipFile(ZIP_NAME, "w") as zf:
        for f in sorted(os.listdir(OUT_DIR)):
            zf.write(os.path.join(OUT_DIR, f), f)
    print(f"\n✅ Готово! Архив: {ZIP_NAME}")

if __name__ == "__main__":
    asyncio.run(main())
