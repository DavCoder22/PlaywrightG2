const { test, expect } = require('@playwright/test');

test.describe('Smoke Tests', () => {
  test('should load the main page', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveTitle(/TaskFlow/i);
  });

  test('should show login form', async ({ page }) => {
    await page.goto('/login');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('[data-cy="email-input"]')).toBeVisible();
    await expect(page.locator('[data-cy="password-input"]')).toBeVisible();
  });

  test('should show register form', async ({ page }) => {
    await page.goto('/register');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('[data-cy="email-input"]')).toBeVisible();
    await expect(page.locator('[data-cy="password-input"]')).toBeVisible();
    await expect(page.locator('[data-cy="confirm-input"]')).toBeVisible();
  });

  test('should navigate between login and register', async ({ page }) => {
    await page.goto('/login');
    await page.waitForLoadState('networkidle');
    await page.click('[data-cy="go-register"]');
    await expect(page.locator('[data-cy="confirm-input"]')).toBeVisible();
  });
});