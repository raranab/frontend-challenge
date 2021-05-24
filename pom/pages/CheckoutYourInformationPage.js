import { Selector } from 'testcafe'

class CheckoutYourInformationPage {
    constructor() {
        this.firstNameField = Selector ('input[id="first-name"]')
        this.lastNameField = Selector ('#last-name')
        this.zipField = Selector ('#postal-code')
        this.errorPostalMessage = Selector ('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error')
        this.continueButton = Selector ('#continue')
          
    }
}

export default new CheckoutYourInformationPage ()