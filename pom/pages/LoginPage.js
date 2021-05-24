import { Selector } from 'testcafe'

class LoginPage {
    constructor() {
        this.usernameField = Selector('input[id="user-name"]')
        this.passwordField = Selector('input[id="password"]')
        this.loginButton = Selector('input[id="login-button"]')
        this.errorMessage = Selector('h3')
    }
}

export default new LoginPage ()