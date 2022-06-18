const { Builder, Capabilities, By } = require('selenium-webdriver');

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
    await driver.get('http://localhost:5500/exercises/automation/movieList/index.html');
});

afterAll(async () => {
    await driver.quit();
});

test('add movie test', async () => {
    await driver.findElement(By.xpath('//input[@placeholder="Add Movie"]')).sendKeys('titanic');
    await driver.findElement(By.xpath('//button[text()="Add"]')).click();
    const titanicMovie = await driver.findElement(By.xpath('//span[text()="titanic"]'));

    const isDisplayed = await titanicMovie.isDisplayed();
    await driver.sleep(5000);
    expect(isDisplayed).toBeTruthy();
});

test('delete movie test', async () => {
    await driver.findElement(By.xpath("//button[@id='titanic']")).click();
    const titanicMovie = await driver.findElement(By.xpath('//span[text()="titanic"]'));

    const isDisplayed = await titanicMovie.isDisplayed();
    await driver.sleep(5000);

    expect(isDisplayed).toBeFalsy();
});


