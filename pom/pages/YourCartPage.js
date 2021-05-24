import { Selector } from 'testcafe'

class YourCartPage {
    constructor () {
        this.yourCartTitle = Selector('#header_container > div.header_secondary_container > span')
        this.quantityItems = Selector('[class="cart_quantity"]')
        this.checkoutButton = Selector('#checkout')
    }
}

export default new YourCartPage()