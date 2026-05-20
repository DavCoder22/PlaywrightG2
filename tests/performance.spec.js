const { test, expect } = require('@playwright/test');

test.describe('Performance Tests', () => {
  test('should load page under 5 seconds', async ({ page }) => {
    const start = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - start;
    console.log(`Page loaded in ${loadTime}ms`);
    expect(loadTime).toBeLessThan(5000);
  });

  test('should load login page quickly', async ({ page }) => {
    const start = Date.now();
    await page.goto('/login');
    const loadTime = Date.now() - start;
    console.log(`Login page loaded in ${loadTime}ms`);
    expect(loadTime).toBeLessThan(5000);
  });

  test('should load register page quickly', async ({ page }) => {
    const start = Date.now();
    await page.goto('/register');
    const loadTime = Date.now() - start;
    console.log(`Register page loaded in ${loadTime}ms`);
    expect(loadTime).toBeLessThan(5000);
  });
});