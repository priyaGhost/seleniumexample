const { By } = require("selenium-webdriver/lib/by");
//const { Key } = require("selenium-webdriver/lib/input");

class flights{
    constructor(driver) {
        this.driver = driver;
    }

    async flights(driver)
    {


        let radioButton_oneway = await driver.findElement(By.css("input[value='oneway']"));
        radioButton_oneway.click();

        await driver.sleep(1000);

        let autoCompleteItem = await driver.findElement(By.css("select[name='fromPort']"));
        autoCompleteItem.sendKeys("London");

        await driver.sleep(1000);

        let radioButton_class = await driver.findElement(By.css("input[value='Business']"));
        radioButton_class.click();
        await driver.sleep(1000);

        await driver.findElement(By.name('findFlights')).click();

    }
}
module.exports=new flights();