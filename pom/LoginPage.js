const { BasePage } = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = page.locator('[data-cy="email-input"]');
    this.passwordInput = page.locator('[data-cy="password-input"]');
    this.submitBtn = page.locator('[data-cy="submit-btn"]');
    this.errorMsg = page.locator('[data-cy="auth-error"]');
    this.registerLink = page.locator('[data-cy="go-register"]');
  }

  async goto() {
    await this.page.goto('/login');
    await this.page.waitForLoadState('networkidle');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitBtn.click();
  }

  async clickRegister() {
    await this.registerLink.click();
  }

  async getErrorMessage() {
    return this.errorMsg.textContent();
  }
}

module.exports = { LoginPage };