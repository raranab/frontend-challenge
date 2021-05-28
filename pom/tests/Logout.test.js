import loginPage from '../pages/LoginPage'
import productPage from '../pages/ProductPage'
import { URLS, CREDENTIALS } from '../data/Constants'

fixture('Logout feature test')
    .page(`${URLS.LOGIN_PAGE}`)

test('User logout from product´s page', async t => {
    await t.
    typeText(loginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME, {paste:true})
    .typeText(loginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD, {paste:true})
    .click(loginPage.loginButton)
    .click(productPage.burgerButton)
    .click(productPage.logout)

    await t.expect(loginPage.usernameField.exists).ok()
})