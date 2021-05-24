import { Selector } from 'testcafe'

class CheckoutOverviewPage {
    constructor() {
        this.checkoutOverviewTitle = Selector('#header_container > div.header_secondary_container > span')
        this.finishButton = Selector('#finish')
        this.purchasedItems = Selector('[class="inventory_item_name"]')  
    }
}

export default new CheckoutOverviewPage ()

