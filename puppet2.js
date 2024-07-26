import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});
const page = await browser.newPage();

const r = `http://localhost:43685/frozen42/?config=/${process.argv[2]}`;
console.log(process.argv[2], r);
await page.goto(r);

// Set screen size
await page.setViewport({ width: 1080, height: 1024 });

// Localte the full title with a unique string
await page.waitForFunction(
  'document.querySelector("body").innerText.includes("Recent sessions")',
  {
    timeout: 0,
  },
);

await browser.close();
