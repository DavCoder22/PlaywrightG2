const { test, expect } = require('@playwright/test');
const { LoginPage, RegisterPage } = require('../pom');

test.describe('Navigation Tests', () => {
  test('should navigate to register from login', async ({ page }) => {
    await page.goto('/login');
    await page.waitForLoadState('networkidle');
    await page.click('text=Regístrate gratis');
    await expect(page).toHaveURL(/register/);
    await expect(page.locator('h1')).toContainText(/crea tu cuenta/i);
  });

  test('should navigate to login from register', async ({ page }) => {
    await page.goto('/register');
    await page.waitForLoadState('networkidle');
    await page.click('text=Inicia sesión');
    await expect(page).toHaveURL(/login/);
    await expect(page.locator('h1')).toContainText(/bienvenido/i);
  });

  test('should redirect unknown routes to login', async ({ page }) => {
    await page.goto('/non-existent-page');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/login/);
    await expect(page.locator('[data-cy="auth-title"]')).toContainText(/bienvenido/i);
  });

  test('should have correct page title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/impr3q|Impresiones 3D/i);
  });
});