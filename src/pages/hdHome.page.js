const ActionHelper = require('../helpers/actionHelpers');

class HDHomePage {
    
    launchApp() {
        ActionHelper.launchApp();
        ActionHelper.switchToNativeContext();
        ActionHelper.pause(10);
    }

    getObjectLocator() {
        return require('../screens/native/android/homeDepot.screen.js');
    }

    //Home Page - Click on Home Icon
    goHome(){
        if (ActionHelper.isVisible(this.getObjectLocator().homeIcon)) {
            ActionHelper.click(this.getObjectLocator().homeIcon);
            ActionHelper.pause(3);
        }
    }

    //Home Page - Click on Account icon
    homeMyAcct(){
        if (ActionHelper.isVisible(this.getObjectLocator().myAcctIcon)) {
            ActionHelper.click(this.getObjectLocator().myAcctIcon);
        }
    }

    //Search from HomeScreen
    homeSearch(){
        if (ActionHelper.isVisible(this.getObjectLocator().searchBox)) {
            ActionHelper.click(this.getObjectLocator().searchBox);
        }
        ActionHelper.pause(2);
    }
}

module.exports = HDHomePage;
