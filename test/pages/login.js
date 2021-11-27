const { By } = require("selenium-webdriver/lib/by");
const { until } = require("selenium-webdriver/lib/until");
chai = require('chai'),expect = chai.expect,assert = chai.assert;


class login{
    constructor(driver) {
        this.driver = driver;
    }


    async login(driver,username,password)
    {

        await driver.findElement(By.name('userName')).sendKeys(username);
        await driver.findElement(By.name('password')).sendKeys(password);
        await driver.findElement(By.name('submit')).click();

        assert.equal(await driver.findElement(By.xpath("*//h3[contains(text(),'Login Successfully')]")).getText(), 'Login Successfully');
        await driver.findElement(By.xpath('//a[contains(@href,"reservation.php")]')).click();
        await driver.sleep(3000);


    }
}
module.exports=new login();