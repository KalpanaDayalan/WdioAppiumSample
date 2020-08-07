const ActionHelper = require('../helpers/actionHelpers');
const HDHomePage = require('./hdHome.page');

class HDMyAcctPage extends HDHomePage {
    
    //MyAcct page
    getUserName(){
        ActionHelper.waitForElement(this.getObjectLocator().userName, 30);
        return ActionHelper.getText(this.getObjectLocator().userName);
    }

    getEmailId(){
        ActionHelper.waitForElement(this.getObjectLocator().email, 30);
        return ActionHelper.getText(this.getObjectLocator().email);
    }
}

module.exports = HDMyAcctPage;
