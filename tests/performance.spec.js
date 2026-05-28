const { test, expect } = require('@playwright/test');

async function getLoadTime(page) {
  return page.evaluate(() => {
    const perf = performance.getEntriesByType('navigation')[0];
    return perf ? perf.loadEventEnd - perf.startTime : -1;
  });
}

test.describe('Performance Tests', () => {
  test('should load login page under 5s', async ({ page }) => {
    await page.goto('/login');
    await page.waitForLoadState('networkidle');
    const loadTime = await getLoadTime(page);
    console.log(`Login page loaded in ${loadTime}ms`);
    expect(loadTime).toBeGreaterThanOrEqual(0);
    expect(loadTime).toBeLessThan(5000);
  });

  test('should load register page under 5s', async ({ page }) => {
    await page.goto('/register');
    await page.waitForLoadState('networkidle');
    const loadTime = await getLoadTime(page);
    console.log(`Register page loaded in ${loadTime}ms`);
    expect(loadTime).toBeGreaterThanOrEqual(0);
    expect(loadTime).toBeLessThan(5000);
  });

  test('should load app root under 5s', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = await getLoadTime(page);
    console.log(`Root page loaded in ${loadTime}ms`);
    expect(loadTime).toBeGreaterThanOrEqual(0);
    expect(loadTime).toBeLessThan(5000);
  });
});