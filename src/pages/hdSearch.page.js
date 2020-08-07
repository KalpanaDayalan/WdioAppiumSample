const ActionHelper = require('../helpers/actionHelpers');
const HDHomePage = require('./hdHome.page');
const Data = require('../data/data');
const data = new Data();

class HDSearchPage extends HDHomePage {
    
    //Search SKU
    searchSKU(){
        ActionHelper.sendText(this.getObjectLocator().searchText, data.SKU);
        ActionHelper.searchSKUEnter();
        ActionHelper.pause(10);
    }

}

module.exports = HDSearchPage;
