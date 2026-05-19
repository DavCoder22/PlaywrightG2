const { test, expect } = require('@playwright/test');

test.describe('Register Page - QA Audit', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/register');
    await page.waitForLoadState('networkidle');
  });

  test('DEBE mostrar título de registro', async ({ page }) => {
    await expect(page.locator('h1, h2').first()).toContainText(/crea tu cuenta/i, { timeout: 10000 });
  });

  test('DEBE mostrar tres campos de contraseña', async ({ page }) => {
    await expect(page.locator('input#email')).toBeVisible();
    await expect(page.locator('input#password')).toBeVisible();
    await expect(page.locator('input#confirm')).toBeVisible();
  });

  test('DEBE validar correo requerido', async ({ page }) => {
    await page.click('button[type="submit"]');
    await expect(page.locator('[data-cy="auth-error"]')).toContainText(/correo es requerido/i, { timeout: 5000 });
  });

  test('DEBE validar contraseña mínima', async ({ page }) => {
    await page.fill('input#email', 'test@test.com');
    await page.fill('input#password', '123');
    await page.click('button[type="submit"]');
    await expect(page.locator('[data-cy="auth-error"]')).toContainText(/al menos 6 caracteres/i, { timeout: 5000 });
  });

  test('DEBE validar contraseñas coinciden', async ({ page }) => {
    await page.fill('input#email', 'test@test.com');
    await page.fill('input#password', 'password123');
    await page.fill('input#confirm', 'differentpass');
    await page.click('button[type="submit"]');
    await expect(page.locator('[data-cy="auth-error"]')).toContainText(/no coinciden/i, { timeout: 5000 });
  });

  test('DEBE tener link a login', async ({ page }) => {
    const link = page.locator('[data-cy="go-login"]');
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', '/login');
  });
});