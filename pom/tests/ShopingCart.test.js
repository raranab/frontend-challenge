import cartPage from '../pages/YourCartPage'
import loginPage from '../pages/LoginPage'
import productPage from '../pages/ProductPage'
import { URLS, CREDENTIALS} from '../data/Constants'

fixture('Shoping Cart feature test')
    .page(`${URLS.LOGIN_PAGE}`)
    .beforeEach(async t => {
        await t.
        typeText(loginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME, {paste:true})
        .typeText(loginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD, {paste:true})
        .click(loginPage.loginButton)
    })

test('User navigate to the shopping cart', async t => {
    await t.
    click(productPage.shoppingCartButton)

    await t.expect(cartPage.yourCartTitle.exists).ok()
    await t.expect(cartPage.yourCartTitle.innerText).eql("YOUR CART")

})

test('User add a single item to the shopping cart', async t => {
    await t.
    click(productPage.addToCartBackpackButton)
    await t.expect(productPage.addToCartBackpackButton.exists).notOk()
    await t.expect(productPage.shoppingCartBadge.innerText).eql("1")
    .click(productPage.shoppingCartButton)
    await t.expect(cartPage.quantityItems.count).eql(1)

 
})

test('User add multiple items to the shopping cart', async t => {
    await t.
    click(productPage.addToCartBackpackButton)
    .click(productPage.addToCartBikeLight)
    .click(productPage.addToCartBoltTshirt)
    await t.expect(productPage.shoppingCartBadge.innerText).eql("3")
    .click(productPage.shoppingCartButton)
    await t.expect(cartPage.quantityItems.count).eql(3)

})
