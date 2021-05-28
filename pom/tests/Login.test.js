import loginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import { URLS, CREDENTIALS} from '../data/Constants'

fixture('Login feature test')
    .page(`${URLS.LOGIN_PAGE}`)

test('User login with a valid user', async t => {
    await t.
    typeText(loginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME, {paste:true})
    .typeText(loginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD, {paste:true})
    .click(loginPage.loginButton)

    await t.expect(ProductPage.productsTitle.exists).ok()
    await t.expect(ProductPage.productsTitle.innerText).eql("PRODUCTS")
})

test('User cannot login with invalid users', async t => {
    await t.
    typeText(loginPage.usernameField, CREDENTIALS.INVALID_USER.USERNAME, {paste:true})
    .typeText(loginPage.passwordField, CREDENTIALS.INVALID_USER.PASSWORD, {paste:true})
    .click(loginPage.loginButton)

    await t.expect(loginPage.errorMessage.exists).ok()
    await t.expect(loginPage.errorMessage.innerText).eql("Epic sadface: Username and password do not match any user in this service")
})