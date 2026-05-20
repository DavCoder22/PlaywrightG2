const { test, expect } = require('@playwright/test');

test.describe('Navigation Tests', () => {
  test('should navigate to register from login', async ({ page }) => {
    await page.goto('/login');
    await page.click('text=Regístrate gratis');
    await expect(page).toHaveURL(/register/);
    await expect(page.locator('h1')).toContainText(/crea tu cuenta/i);
  });

  test('should navigate to login from register', async ({ page }) => {
    await page.goto('/register');
    await page.click('text=Inicia sesión');
    await expect(page).toHaveURL(/login/);
    await expect(page.locator('h1')).toContainText(/bienvenido/i);
  });

  test('should handle 404 gracefully', async ({ page }) => {
    const response = await page.goto('/non-existent-page');
    expect(response.status()).toBeLessThan(500);
  });

  test('should have correct page title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/TaskFlow/i);
  });
});