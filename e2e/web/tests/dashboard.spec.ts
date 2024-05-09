import { format, addDays } from 'date-fns';
import { type Locator, test, expect } from '@playwright/test';
import { login } from './helpers/auth-helper';
import { waitForToastHidden } from './helpers/toast-helper';

test('Dashboard Test: Title', async ({ page }) => {
  await login(page);
  await page.goto('/dashboard');

  await expect(page).toHaveTitle(/Dashboard/);
});

test('Dashboard Test: Add new task', async ({ page }) => {
  const now = Date.now();
  await login(page, { email: 'alice@tasker.io', password: '123456' });
  await page.goto('/dashboard');

  await page.click('[data-testid=create-task-button]');

  const tasks = page.locator('[data-testid=task-item]');
  const initialTaskCount = await tasks.count();

  const form = page.locator('[data-testid=create-task-form]');
  await form.waitFor();

  await page.fill('[data-testid=create-task-input-title]', `Title ${now}`);
  await page.fill(
    '[data-testid=create-task-input-description]',
    `Description ${now}`,
  );
  await page.fill(
    '[data-testid=create-task-input-dueAt]',
    format(addDays(new Date(), 1), 'yyyy-MM-dd'),
  );

  const assignee = page.locator('[data-testid=create-task-input-assignee]');
  const options = page.locator(
    '[data-testid=create-task-input-assignee] option',
  );

  const count = await options.count();
  let me: string;
  for (let i = 0; i < count; i++) {
    const text = await options.nth(i).textContent();
    if (text.match(/Alice/)) {
      me = await options.nth(i).getAttribute('value');
    }
  }
  await assignee.selectOption(me);

  await page.click('[data-testid=create-task-submit]');

  while (await form.isVisible()) {
    await page.waitForTimeout(500);
  }

  await waitForToastHidden(page);

  const newTaskCount = await tasks.count();

  expect(newTaskCount).toBeGreaterThan(initialTaskCount);
});
