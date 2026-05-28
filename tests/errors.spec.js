const { test, expect } = require('@playwright/test');

test.describe('Console Error Tests', () => {
  test('should not have console errors on login page', async ({ page }) => {
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.goto('/login');
    await page.waitForLoadState('networkidle');

    console.log('Console errors:', errors);
    expect(errors.length).toBe(0);
  });

  test('should not have console errors on register page', async ({ page }) => {
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.goto('/register');
    await page.waitForLoadState('networkidle');

    console.log('Console errors:', errors);
    expect(errors.length).toBe(0);
  });
});