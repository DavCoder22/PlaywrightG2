const { test, expect } = require('@playwright/test');

test('Debug: take screenshot of login page', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(3000);

  await page.screenshot({ path: 'login-page.png', fullPage: true });

  console.log('Page title:', await page.title());
  console.log('URL:', page.url());
  console.log('Body:', await page.locator('body').innerText());

  expect(page.locator('body')).toBeVisible();
});

test('Debug: take screenshot of register page', async ({ page }) => {
  await page.goto('/register');
  await page.waitForTimeout(3000);

  await page.screenshot({ path: 'register-page.png', fullPage: true });

  console.log('Page title:', await page.title());
  console.log('URL:', page.url());

  expect(page.locator('body')).toBeVisible();
});