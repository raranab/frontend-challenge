import { Selector } from 'testcafe'

class CheckoutCompletePage {
    constructor() {
        this.checkoutComplete = Selector('#header_container > div.header_secondary_container > span')
        this.thankMessage = Selector ('h2')
        this.ponyImage = Selector ('#checkout_complete_container > img')

    }
}

export default new CheckoutCompletePage ()