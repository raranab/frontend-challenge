import loginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'

fixture('Login feature test')
    .page('https://www.saucedemo.com/')

test('User login with a valid user', async t => {
    await t.
    typeText(loginPage.usernameField, "standard_user", {paste:true})
    .typeText(loginPage.passwordField, "secret_sauce", {paste:true})
    .click(loginPage.loginButton)

    await t.expect(ProductPage.productsTitle.exists).ok()
    await t.expect(ProductPage.productsTitle.innerText).eql("PRODUCTS")
})

test('User cannot login with invalid users', async t => {
    await t.
    typeText(loginPage.usernameField, "tom", {paste:true})
    .typeText(loginPage.passwordField, "tesik3", {paste:true})
    .click(loginPage.loginButton)

    await t.expect(loginPage.errorMessage.exists).ok()
    await t.expect(loginPage.errorMessage.innerText).eql("Epic sadface: Username and password do not match any user in this service")
})