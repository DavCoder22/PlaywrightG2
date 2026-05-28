const { test, expect } = require('@playwright/test');
const { LoginPage, RegisterPage } = require('../pom');

test.describe('Auth Tests', () => {
  test('login - shows error for empty fields', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.submitBtn.click();
    await expect(login.errorMsg).toBeVisible();
  });

  test('login - validates email required', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('', 'password123');
    await expect(login.errorMsg).toContainText(/correo|required/i);
  });

  test('register - validates email required', async ({ page }) => {
    const register = new RegisterPage(page);
    await register.goto();
    await register.register('', 'password123', 'password123');
    await expect(register.errorMsg).toContainText(/correo es requerido|required/i);
  });

  test('register - validates password required', async ({ page }) => {
    const register = new RegisterPage(page);
    await register.goto();
    await register.register('test@test.com', '', '');
    await expect(register.errorMsg).toContainText(/contraseña es requerida|required/i);
  });

  test('register - validates password min length', async ({ page }) => {
    const register = new RegisterPage(page);
    await register.goto();
    await register.register('test@test.com', '123', '123');
    await expect(register.errorMsg).toContainText(/6 caracteres|min/i);
  });

  test('register - validates password match', async ({ page }) => {
    const register = new RegisterPage(page);
    await register.goto();
    await register.register('test@test.com', 'password123', 'different');
    await expect(register.errorMsg).toContainText(/coinciden|match/i);
  });
});