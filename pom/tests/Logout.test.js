import loginPage from '../pages/LoginPage'
import productPage from '../pages/ProductPage'

fixture('Logout feature test')
    .page('https://www.saucedemo.com/')

test('User logout from product´s page', async t => {
    await t.
    typeText(loginPage.usernameField, "standard_user", {paste:true})
    .typeText(loginPage.passwordField, "secret_sauce", {paste:true})
    .click(loginPage.loginButton)
    .click(productPage.burgerButton)
    .click(productPage.logout)

    await t.expect(loginPage.usernameField.exists).ok()
})