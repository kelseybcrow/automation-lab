const { Builder, Capabilities, By } = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit
})

test('add a movie', async () => {
    const theInput = await driver.findElement(By.xpath('//input'))
    const searchTerm = 'Tenet'
    const theButton = await driver.findElement(By.css('button'))
    const theResult = await driver.findElement(By.xpath('//li/span')).getText()

    await theInput.sendKeys(searchTerm)
    await theButton.click()
    expect(theResult).toBe(searchTerm)

    await driver.sleep(3000)
})

test('we can cross off a movie', async () => {
    const movieInput = await driver.findElement(By.xpath('//form/input'))
    const movieLi = await driver.findElement(By.css('span'))
    const movieClass = await movieLi.getAttribute

    await movieInput.sendKeys('Mulan\n')
    await movieLi.click()
    expect(movieClass).toBe('checked')

    await driver.sleep(3000)
})

test('this is a test', async () => {
    await driver.navigate().refresh()
    await driver.sleep(2000)
    await driver.navigate().to('https://www.google.com')
})
