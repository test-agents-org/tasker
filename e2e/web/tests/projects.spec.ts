import { test, expect } from '@playwright/test';
import { login } from './helpers/auth-helper';

test('Projects Tests', async ({ page }) => {
  await login(page);
  await page.goto('/projects');

  await expect(page).toHaveURL('/projects');
});
