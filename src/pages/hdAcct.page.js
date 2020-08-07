const ActionHelper = require('../helpers/actionHelpers');
const HDHomePage = require('./hdHome.page');

class HDAcctPage extends HDHomePage{

    //Account Creation/SignIn Page
    gotoSignIn(){
        if (ActionHelper.isVisible(this.getObjectLocator().acctSignIn)) {
            ActionHelper.click(this.getObjectLocator().acctSignIn);
        }
    }

   
}

module.exports = HDAcctPage;
