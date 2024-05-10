import type { Page } from '@playwright/test';

export async function login(
  page: Page,
  creds = { email: 'alice@tasker.io', password: '123456' },
) {
  await page.goto('/login');

  await page.fill('[data-testid=email]', creds.email);
  await page.fill('[data-testid=password]', creds.password);

  await page.click('[data-testid=submit]');
}
