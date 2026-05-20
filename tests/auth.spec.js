const { test, expect } = require('@playwright/test');

test.describe('Authentication', () => {
  test('should show login page', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(5000);

    const screenshot = await page.screenshot();
    console.log('Screenshot taken, length:', screenshot.length);

    const body = page.locator('body');
    await expect(body).toBeVisible();

    const text = await body.innerText();
    console.log('Page text:', text.substring(0, 200));

    expect(text).toContain('TaskFlow');
  });

  test('should show register page', async ({ page }) => {
    await page.goto('/register');
    await page.waitForTimeout(5000);

    const body = page.locator('body');
    await expect(body).toBeVisible();

    const text = await body.innerText();
    console.log('Register page text:', text.substring(0, 200));

    expect(text).toContain('TaskFlow');
  });

  test('should show login form', async ({ page }) => {
    await page.goto('/login');
    await page.waitForTimeout(5000);

    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
  });
});