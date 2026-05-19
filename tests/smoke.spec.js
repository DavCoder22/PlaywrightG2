const { test, expect } = require('@playwright/test');

test.describe('Smoke Tests - TaskFlow QA', () => {
  test('DEBE cargar la página principal sin errores', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/TaskFlow/i);
  });

  test('DEBE mostrar formulario de login visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
  });

  test('DEBE tener brand TaskFlow visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('[data-cy="auth-brand"]')).toContainText('TaskFlow');
  });

  test('DEBE navegar entre páginas de autenticación', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Regístrate gratis');
    await expect(page.locator('text=Inicia sesión')).toBeVisible();
    await expect(page.locator('h1')).toContainText(/crea tu cuenta/i);

    await page.click('text=Inicia sesión');
    await expect(page.locator('text=Regístrate gratis')).toBeVisible();
  });
});