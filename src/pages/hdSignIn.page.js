const ActionHelper = require('../helpers/actionHelpers');
const HDHomePage = require('./hdHome.page');
const Data = require('../data/data');
const data = new Data();

class HDSignInPage extends HDHomePage{

    //Cancel existing mobile accounts
    cancelAccts(){
        if (ActionHelper.isVisible(this.getObjectLocator().cancelAccts)) {
            ActionHelper.click(this.getObjectLocator().cancelAccts);
        }
    }

    //SignIn page
    signIn(){
        this.cancelAccts();
        ActionHelper.click(this.getObjectLocator().emailId);
        console.log("email  from data : "+data.EMAIL);
        ActionHelper.sendText(this.getObjectLocator().emailId, data.EMAIL);
        ActionHelper.click(this.getObjectLocator().password);
        console.log("pwd  from data : "+data.PWD);
        ActionHelper.sendText(this.getObjectLocator().password, data.PWD);
        if (ActionHelper.isVisible(this.getObjectLocator().signIn)) {
            ActionHelper.click(this.getObjectLocator().signIn);
        }
    }

}

module.exports = HDSignInPage;
