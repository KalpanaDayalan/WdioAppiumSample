class HomeDepotScreen{
    constructor(){
        //Home 
        this.myAcctIcon = '//android.widget.FrameLayout[@content-desc="Account"]/android.widget.ImageView';
        this.searchBox = '//android.widget.EditText[@resource-id="com.thehomedepot:id/txt_search"]';
        this.homeIcon = '//android.widget.FrameLayout[@content-desc="Home"]/android.widget.ImageView';

        //Search
        this.searchText = '//android.widget.EditText[@resource-id="com.thehomedepot:id/txt_search"]';

        //PIP
        this.productName = '//android.widget.TextView[@resource-id="com.thehomedepot:id/tv_brand_description"]';

        //Acct Sign (or) Registration
        this.acctSignIn = '//android.widget.Button[@resource-id="com.thehomedepot:id/sign_in_button"]';

        //Acct alert
        this.cancelAccts = '//android.widget.LinearLayout'+
                            '[@content-desc="Choose an Account"]/android.widget.LinearLayout/android.widget.Button';
        //this.cancelAccts = '//android.widget.Button[@resource-id="com.google.android.gms:id/cancel"]';

        //Sign In 
        this.emailId = '//android.widget.EditText[@resource-id="com.thehomedepot:id/sign_email_ET"]';
        this.password = '//android.widget.EditText[@resource-id="com.thehomedepot:id/sign_password_ET"]';
        this.signIn = '//android.widget.Button[@resource-id="com.thehomedepot:id/sign_in_button"]';

        //My Account 
        this.userName = '//android.widget.TextView[@resource-id="com.thehomedepot:id/account_welcome_message"]';
        this.email = '//android.widget.TextView[@resource-id="com.thehomedepot:id/account_email"]';
    }
}

module.exports = new HomeDepotScreen();
