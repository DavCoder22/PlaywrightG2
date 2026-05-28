const { test, expect } = require('@playwright/test');
const { LoginPage, RegisterPage } = require('../pom');

test.describe('E2E Auth Flow', () => {
  test('full register to login navigation flow', async ({ page }) => {
    const register = new RegisterPage(page);
    await register.goto();

    await expect(page.locator('h1')).toContainText(/crea tu cuenta/i);

    await register.register('', '', '');
    await expect(register.errorMsg).toBeVisible();

    await register.register('user@test.com', '123', '123');
    await expect(register.errorMsg).toContainText(/6 caracteres/i);

    await register.register('user@test.com', 'password123', 'different');
    await expect(register.errorMsg).toContainText(/coinciden/i);
  });

  test('full login with invalid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();

    await expect(page.locator('h1')).toContainText(/bienvenido/i);

    await login.login('', '');
    await expect(login.errorMsg).toBeVisible();

    await login.login('invalid@test.com', 'test');
    await page.waitForLoadState('networkidle');
    expect(page.url()).not.toMatch(/\/app\//);
    await expect(login.errorMsg).toBeVisible();

    await login.clickRegister();
    await expect(page).toHaveURL(/register/);
  });
});