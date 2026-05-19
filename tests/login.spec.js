const { test, expect } = require('@playwright/test');

test.describe('Login Page - QA Audit', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

  test('DEBE mostrar título de login', async ({ page }) => {
    await expect(page.locator('h1')).toContainText(/bienvenido de vuelta/i);
  });

  test('DEBE mostrar campos obligatorios', async ({ page }) => {
    await expect(page.locator('label:has-text("Correo electrónico")')).toBeVisible();
    await expect(page.locator('label:has-text("Contraseña")')).toBeVisible();
  });

  test('DEBE validar campo correo vacío', async ({ page }) => {
    await page.click('button[type="submit"]');
    await expect(page.locator('[data-cy="auth-error"]')).toContainText(/correo es requerido/i);
  });

  test('DEBE validar campo contraseña vacío', async ({ page }) => {
    await page.fill('input[type="email"]', 'test@test.com');
    await page.click('button[type="submit"]');
    await expect(page.locator('[data-cy="auth-error"]')).toContainText(/contraseña es requerida/i);
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