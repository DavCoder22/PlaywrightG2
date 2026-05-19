const { test, expect } = require('@playwright/test');

test.describe('Authentication', () => {
  test.beforeEach(async ({ page }) => {
    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.log(`Console error: ${msg.text()}`);
      }
    });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('should display login page by default', async ({ page }) => {
    const heading = page.locator('h1, h2').first();
    await expect(heading).toBeVisible({ timeout: 10000 });
    await expect(page.locator('text=Regístrate')).toBeVisible();
  });

  test('should navigate to register page', async ({ page }) => {
    await page.click('a:has-text("Regístrate"), button:has-text("Regístrate")', { timeout: 10000 });
    const heading = page.locator('h1, h2').first();
    await expect(heading).toContainText(/crea|registr/i, { timeout: 10000 });
  });

  test('should show validation error for empty fields', async ({ page }) => {
    await page.click('button[type="submit"]');
    await expect(page.locator('[data-cy="auth-error"], .form-error, text=/requerido/i')).toBeVisible({ timeout: 5000 });
  });

  test('should show error for invalid credentials', async ({ page }) => {
    await page.fill('input[type="email"]', 'test@test.com');
    await page.fill('input[type="password"]', 'wrongpass');
    await page.click('button[type="submit"]');
    await expect(page.locator('[data-cy="auth-error"], .form-error')).toBeVisible({ timeout: 15000 });
  });
});