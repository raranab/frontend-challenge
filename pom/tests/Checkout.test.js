import cartPage from '../pages/YourCartPage'
import loginPage from '../pages/LoginPage'
import productPage from '../pages/ProductPage'
import checkoutYourInformationPage from '../pages/CheckoutYourInformationPage'
import yourCartPage from '../pages/YourCartPage'
import checkoutOverviewPage from '../pages/CheckoutOverviewPage'
import checkoutCompletePage from '../pages/CheckoutCompletePage'

fixture('Checkout feature test')
    .page('https://www.saucedemo.com/')
    .beforeEach(async t => {
        await t.
        typeText(loginPage.usernameField, "standard_user", {paste:true})
        .typeText(loginPage.passwordField, "secret_sauce", {paste:true})
        .click(loginPage.loginButton)
    })

test('User misses information in the user´s information page', async t => {
    await t.
    click(productPage.addToCartBackpackButton)
    await t.expect(productPage.shoppingCartBadge.innerText).eql("1")
    .click(productPage.shoppingCartButton)
    await t.expect(cartPage.quantityItems.count).eql(1)
    .click(yourCartPage.checkoutButton)
    .typeText(checkoutYourInformationPage.firstNameField, "Rafa", {paste:true})
    .typeText(checkoutYourInformationPage.lastNameField, "Last", {paste:true})
    .click(checkoutYourInformationPage.continueButton)

    await t.expect(checkoutYourInformationPage.errorPostalMessage.innerText).eql("Error: Postal Code is required")

})

test('User fill all informatio¡n and it is displayed in the overview page', async t => {
    await t.
    click(productPage.addToCartBackpackButton)
    await t.expect(productPage.shoppingCartBadge.innerText).eql("1")
    .click(productPage.shoppingCartButton)
    await t.expect(cartPage.quantityItems.count).eql(1)
    .click(yourCartPage.checkoutButton)
    .typeText(checkoutYourInformationPage.firstNameField, "Rafa", {paste:true})
    .typeText(checkoutYourInformationPage.lastNameField, "Last", {paste:true})
    .typeText(checkoutYourInformationPage.zipField, "12345", {paste:true})
    .click(checkoutYourInformationPage.continueButton)
    
    await t.expect(checkoutOverviewPage.checkoutOverviewTitle.innerText).eql("CHECKOUT: OVERVIEW")
})

test('User validate the items added in the overview page', async t => {
    await t.
    click(productPage.addToCartBackpackButton)
    .click(productPage.addToCartBikeLight)
    .click(productPage.addToCartBoltTshirt)
    await t.expect(productPage.shoppingCartBadge.innerText).eql("3")
    .click(productPage.shoppingCartButton)
    await t.expect(cartPage.quantityItems.count).eql(3)
    .click(yourCartPage.checkoutButton)
    .typeText(checkoutYourInformationPage.firstNameField, "Rafa", {paste:true})
    .typeText(checkoutYourInformationPage.lastNameField, "Last", {paste:true})
    .typeText(checkoutYourInformationPage.zipField, "12345", {paste:true})
    .click(checkoutYourInformationPage.continueButton)
    await t.expect(checkoutOverviewPage.purchasedItems.count).eql(3)

})

test('User complete a purchase', async t => {
    await t.
    click(productPage.addToCartBackpackButton)
    .click(productPage.addToCartBikeLight)
    .click(productPage.addToCartBoltTshirt)
    await t.expect(productPage.shoppingCartBadge.innerText).eql("3")
    .click(productPage.shoppingCartButton)
    await t.expect(cartPage.quantityItems.count).eql(3)
    .click(yourCartPage.checkoutButton)
    .typeText(checkoutYourInformationPage.firstNameField, "Rafa", {paste:true})
    .typeText(checkoutYourInformationPage.lastNameField, "Last", {paste:true})
    .typeText(checkoutYourInformationPage.zipField, "12345", {paste:true})
    .click(checkoutYourInformationPage.continueButton)
    await t.expect(checkoutOverviewPage.purchasedItems.count).eql(3)
    .click(checkoutOverviewPage.finishButton)
    await t.expect(checkoutCompletePage.checkoutComplete.innerText).eql("CHECKOUT: COMPLETE!")
    await t.expect(checkoutCompletePage.checkoutComplete.exists).ok()


})