class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(url = '/') {
    await this.page.goto(url);
    await this.page.waitForLoadState('networkidle');
  }

  async getTitle() {
    return this.page.title();
  }

  async getUrl() {
    return this.page.url();
  }

  async waitForNetwork() {
    await this.page.waitForLoadState('networkidle');
  }

  async collectConsoleErrors() {
    const errors = [];
    this.page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    return errors;
  }
}

module.exports = { BasePage };