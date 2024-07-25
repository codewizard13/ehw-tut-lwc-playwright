const  {chromium, firefox, webkit} = require("playwright")

async function screenshots() {
  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()

  await page.goto("https://learnwebcode.com/")
  await page.setViewportSize({width: 640, height: 480})
  await page.screenshot({path: "mobile_full.png", fullPage: true})
  await browser.close()
}

screenshots()