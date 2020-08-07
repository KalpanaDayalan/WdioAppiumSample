const ActionHelper = require('../helpers/actionHelpers');
const HDHomePage = require('./hdHome.page');


class HDPIPPage extends HDHomePage {
    
    //Read SKU Description
    getSKUDesc(){
        ActionHelper.pause(5);
        ActionHelper.waitForElement(this.getObjectLocator().productName, 10);
        return ActionHelper.getText(this.getObjectLocator().productName);
    }

}

module.exports = HDPIPPage;