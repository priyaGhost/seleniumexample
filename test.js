var webdriver = require('selenium-webdriver');
    require('chromedriver');
    require("mocha-allure-reporter");
  const loginPage = require("./test/pages/login");
  const flightpage = require("./test/pages/flights");
  LoginTest = require("./test/testData/LoginTest");


describe('Validate Login Functionality: ', function()
       {
           let driver;
           this.timeout(30000);
           beforeEach('Browser initialization', async function(){
               driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
               await driver.get("http://demo.guru99.com/test/newtours/");

           });
           LoginTest.forEach(function (data,username,password) {
               it('Welcome Mercury',async function () {
                   await loginPage.login(driver,data.username,data.password);
                   await flightpage.flights(driver);

               });

           })
           afterEach(async function() {

               await driver.quit();

           });

       })