const { test, expect } = require('@playwright/test');

test.describe('Authentication', () => {
  test.beforeEach(async ({ page }) => {
    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.log(`Console error: ${msg.text()}`);
      }
    });
    await page.goto('/');
  });

  test('should display login page by default', async ({ page }) => {
    await expect(page.locator('h1')).toContainText(/bienvenido de vuelta/i, { timeout: 10000 });
    await expect(page.locator('text=Regístrate gratis')).toBeVisible();
  });

  test('should navigate to register page', async ({ page }) => {
    await page.click('text=Regístrate gratis');
    await expect(page.locator('h1')).toContainText(/crea tu cuenta/i, { timeout: 10000 });
  });

  test('should show validation error for empty login', async ({ page }) => {
    await page.click('button[type="submit"]');
    await expect(page.locator('[data-cy="auth-error"]')).toContainText(/correo es requerido/i, { timeout: 5000 });
  });

  test('should show error for invalid credentials', async ({ page }) => {
    await page.fill('input[type="email"]', 'test@test.com');
    await page.fill('input[type="password"]', 'wrongpass');
    await page.click('button[type="submit"]');
    await expect(page.locator('[data-cy="auth-error"]')).toBeVisible({ timeout: 10000 });
  });
});