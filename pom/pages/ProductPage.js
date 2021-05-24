import { Selector } from 'testcafe'

class ProductPage {
    constructor() {
        this.productsTitle = Selector('#header_container > div.header_secondary_container > span')
        this.burgerButton = Selector('#react-burger-menu-btn')
        //can update this method to select any value from the burger options
        this.logout = Selector('#logout_sidebar_link')
        this.shoppingCartButton = Selector('#shopping_cart_container > a')
        this.addToCartBackpackButton = Selector('#add-to-cart-sauce-labs-backpack')
        this.addToCartBikeLight = Selector ('#add-to-cart-sauce-labs-bike-light')
        this.addToCartBoltTshirt = Selector ('#add-to-cart-sauce-labs-bolt-t-shirt')
        this.shoppingCartBadge = Selector('#shopping_cart_container > a > span')
        

    }
}

export default new ProductPage ()