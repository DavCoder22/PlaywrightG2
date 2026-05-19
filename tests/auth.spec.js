const { test, expect } = require('@playwright/test');

test.describe('Authentication', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display login page by default', async ({ page }) => {
    await expect(page.locator('h2')).toContainText(/iniciar sesión/i);
    await expect(page.locator('text=Registrarse')).toBeVisible();
  });

  test('should navigate to register page', async ({ page }) => {
    await page.click('text=Registrarse');
    await expect(page.locator('h2')).toContainText(/registrarse/i);
  });

  test('should show validation error for empty login', async ({ page }) => {
    await page.click('button[type=submit]');
    await expect(page.locator('text=El correo es requerido')).toBeVisible();
  });

  test('should show error for invalid email format', async ({ page }) => {
    await page.fill('input[type=email]', 'invalid-email');
    await page.click('button[type=submit]');
    await expect(page.locator('text=Correo inválido')).toBeVisible();
  });
});