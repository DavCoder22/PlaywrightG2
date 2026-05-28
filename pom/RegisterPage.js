const { BasePage } = require('./BasePage');

class RegisterPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = page.locator('[data-cy="email-input"]');
    this.passwordInput = page.locator('[data-cy="password-input"]');
    this.confirmInput = page.locator('[data-cy="confirm-input"]');
    this.submitBtn = page.locator('[data-cy="submit-btn"]');
    this.errorMsg = page.locator('[data-cy="auth-error"]');
    this.loginLink = page.locator('[data-cy="go-login"]');
  }

  async goto() {
    await this.page.goto('/register');
    await this.page.waitForLoadState('networkidle');
  }

  async register(email, password, confirm) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.confirmInput.fill(confirm);
    await this.submitBtn.click();
  }

  async clickLogin() {
    await this.loginLink.click();
  }

  async getErrorMessage() {
    return this.errorMsg.textContent();
  }
}

module.exports = { RegisterPage };