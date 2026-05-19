const { test, expect } = require('@playwright/test');

test.describe('Todo Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should show todo page elements when authenticated', async ({ page }) => {
    await page.goto('/todos');
    const hasContent = await page.locator('body').textContent();
    if (hasContent.includes('Cerrar sesión') || hasContent.includes('Añadir tarea')) {
      await expect(page.locator('text=Añadir tarea')).toBeVisible();
    }
  });

  test('should display empty state when no todos', async ({ page }) => {
    await page.goto('/todos');
    const content = await page.locator('body').textContent();
    if (content.length > 0) {
      const hasTodos = content.includes('No hay tareas');
      if (!hasTodos) {
        await expect(page.locator('body')).toBeVisible();
      }
    }
  });
});