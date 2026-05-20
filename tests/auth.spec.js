const { test, expect } = require('@playwright/test');

test.describe('TaskFlow Auth Tests', () => {
  test('login - should show error for empty fields', async ({ page }) => {
    await page.goto('/login');
    await page.click('button[type="submit"]');
    await expect(page.locator('[data-cy="auth-error"]')).toBeVisible();
  });

  test('login - should validate email required', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[type="password"]', 'password123');
    await page.click('button[type="submit"]');
    await expect(page.locator('[data-cy="auth-error"]')).toContainText(/correo|required/i);
  });

  test('register - should show error for empty fields', async ({ page }) => {
    await page.goto('/register');
    await page.click('button[type="submit"]');
    await expect(page.locator('[data-cy="auth-error"]')).toBeVisible();
  });

  test('register - should validate password min length', async ({ page }) => {
    await page.goto('/register');
    await page.fill('input#email', 'test@test.com');
    await page.fill('input#password', '123');
    await page.click('button[type="submit"]');
    await expect(page.locator('[data-cy="auth-error"]')).toContainText(/6 caracteres|min/i);
  });

  test('register - should validate password match', async ({ page }) => {
    await page.goto('/register');
    await page.fill('input#email', 'test@test.com');
    await page.fill('input#password', 'password123');
    await page.fill('input#confirm', 'different');
    await page.click('button[type="submit"]');
    await expect(page.locator('[data-cy="auth-error"]')).toContainText(/coincidan|match/i);
  });
});