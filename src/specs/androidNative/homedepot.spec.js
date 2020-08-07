const HomePage =  require('./../../pages/hdHome.page');
const homePage = new HomePage();
const AcctPage =  require('./../../pages/hdAcct.page');
const acctPage = new AcctPage();
const SignInPage =  require('./../../pages/hdSignIn.page');
const signInPage = new SignInPage();
const MyAcctPage =  require('./../../pages/hdMyAcct.page');
const myAcctPage = new MyAcctPage();
const SearchPage =  require('./../../pages/hdSearch.page');
const searchPage = new SearchPage();
const PIP =  require('./../../pages/hdPIP.page');
const pip = new PIP();
const Data = require ('./../../data/data');
const data = new Data();


const assert = require('assert');

describe('SignIn to HomeDepot', () => {
    beforeEach(() => {
        homePage.launchApp();
    });
    it('to verify email is calpanad@gmail.com', () => {
        homePage.homeMyAcct();
        acctPage.gotoSignIn();
        signInPage.signIn();
        const welcome_msg = myAcctPage.getUserName();
        console.log('Message printed in app is '+welcome_msg);
        assert.equal(welcome_msg,data.WELCOME_MSG);
        const emailId = myAcctPage.getEmailId();
        console.log('Email Address printed in app is '+emailId);
        assert.equal(emailId, data.EMAIL);
    });

});

describe('Search SKU', () => {
    it('to verify SKU description in PIP', () => {
        homePage.goHome();
        homePage.homeSearch();
        searchPage.searchSKU();
        const skuDesc = pip.getSKUDesc();
        assert.equal(skuDesc, data.SKUDESC);
    });

});
