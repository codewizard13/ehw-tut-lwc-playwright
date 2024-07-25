// scrape-weather.js
const  {chromium, firefox, webkit} = require("playwright")

async function getWeatherData(url) {
  //To test Firefox:
  const browser = await firefox.launch()
  // const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()

  await page.goto(url)

  const [temperature] = await page.locator(".myforecast-current-lrg").allInnerTexts()

  console.log(temperature)

  await browser.close()
}

const sourceUrl = "https://forecast.weather.gov/MapClick.php?lat=40.7533&lon=-74.0038"

getWeatherData(sourceUrl)