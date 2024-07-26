import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const r = `http://localhost:3000/build_frozen/?config=${process.argv[2]}.json`;
  console.log(process.argv[2], r);
  await page.goto(r);

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  // Localte the full title with a unique string
  await page.waitForFunction(
    'document.querySelector("body").innerText.includes("Recent sessions")',
    {
      timeout: 0,
    }
  );

  await browser.close();
})();
