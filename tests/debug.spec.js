const { test, expect } = require('@playwright/test');

test('DEBUG: capture page state', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  const screenshot = await page.screenshot();
  console.log('Page title:', await page.title());
  console.log('Page URL:', page.url());

  const bodyText = await page.locator('body').textContent();
  console.log('Body text:', bodyText.substring(0, 500));

  const h1 = await page.locator('h1').first().textContent().catch(() => 'none');
  const h2 = await page.locator('h2').first().textContent().catch(() => 'none');
  console.log('H1:', h1);
  console.log('H2:', h2);

  const html = await page.content();
  console.log('HTML length:', html.length);

  expect(page).toHaveTitle(/taskflow/i);
});