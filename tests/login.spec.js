const { test, expect } = require('@playwright/test');

test.describe('Login Page - QA Audit', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await page.waitForLoadState('networkidle');
  });

  test('DEBE mostrar título de login', async ({ page }) => {
    await expect(page.locator('h1, h2').first()).toContainText(/bienvenido de vuelta/i, { timeout: 10000 });
  });

  test('DEBE mostrar campos obligatorios', async ({ page }) => {
    await expect(page.locator('label:has-text("Correo")')).toBeVisible();
    await expect(page.locator('label:has-text("Contraseña")')).toBeVisible();
  });

  test('DEBE validar campo correo vacío', async ({ page }) => {
    await page.click('button[type="submit"]');
    await expect(page.locator('[data-cy="auth-error"]')).toContainText(/correo es requerido/i, { timeout: 5000 });
  });

  test('DEBE validar campo contraseña vacío', async ({ page }) => {
    await page.fill('input[type="email"]', 'test@test.com');
    await page.click('button[type="submit"]');
    await expect(page.locator('[data-cy="auth-error"]')).toContainText(/contraseña es requerida/i, { timeout: 5000 });
  });

  test('DEBE tener link a registro', async ({ page }) => {
    const link = page.locator('[data-cy="go-register"]');
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', '/register');
  });

  test('DEBE tener botón de submit', async ({ page }) => {
    const btn = page.locator('button[type="submit"]');
    await expect(btn).toBeVisible();
    await expect(btn).toContainText(/iniciar sesión/i);
  });
});