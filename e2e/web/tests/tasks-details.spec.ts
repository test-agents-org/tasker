import { expect, test } from '@playwright/test';
import { login } from './helpers/auth-helper';
import { createTask } from './helpers/task-helper';
import { format } from 'date-fns';

test('Tasks Test: Add new task', async ({ page }) => {
  const now = Date.now();
  await login(page, { email: 'alice@tasker.io', password: '123456' });
  await page.goto('/tasks');

  const tasks = page.locator('[data-testid=task-item]');
  const initialTaskCount = await tasks.count();

  await createTask(page, {
    title: `Test 1 ${now}`,
    description: `Test ${now}`,
    project: 'Engineering',
    assignToMe: true,
  });
  await createTask(page, {
    title: `Test 2 ${now}`,
    description: `Test ${now}`,
    project: 'Engineering',
    assignToMe: true,
  });
  await createTask(page, {
    title: `Test 3 ${now}`,
    description: `Test ${now}`,
    project: 'Engineering',
    assignToMe: true,
  });
  await createTask(page, {
    title: `Test 4 ${now}`,
    description: `Test ${now}`,
    project: 'Engineering',
    assignToMe: true,
  });
  await createTask(page, {
    title: `Test 5 ${now}`,
    description: `Test ${now}`,
    project: 'Design',
    assignToMe: true,
  });
  await createTask(page, {
    title: `Test 6 ${now}`,
    description: `Test ${now}`,
    project: 'Design',
    assignToMe: true,
  });
  await createTask(page, {
    title: `Test 7 ${now}`,
    description: `Test ${now}`,
    project: 'Design',
    assignToMe: true,
  });
  await createTask(page, {
    title: `Test 8 ${now}`,
    description: `Test ${now}`,
    project: 'Design',
    assignToMe: true,
  });

  const newTaskCount = await tasks.count();

  expect(newTaskCount).toBeGreaterThan(initialTaskCount);

  const taskItemTextContents = await tasks.allTextContents();
  expect(
    taskItemTextContents.some((s) => s.match(`Test 1 ${now}`)),
  ).toBeTruthy();
  expect(
    taskItemTextContents.some((s) => s.match(`Test 2 ${now}`)),
  ).toBeTruthy();
  expect(
    taskItemTextContents.some((s) => s.match(`Test 3 ${now}`)),
  ).toBeTruthy();
  expect(
    taskItemTextContents.some((s) => s.match(`Test 4 ${now}`)),
  ).toBeTruthy();
  expect(
    taskItemTextContents.some((s) => s.match(`Test 5 ${now}`)),
  ).toBeTruthy();
  expect(
    taskItemTextContents.some((s) => s.match(`Test 6 ${now}`)),
  ).toBeTruthy();
  expect(
    taskItemTextContents.some((s) => s.match(`Test 7 ${now}`)),
  ).toBeTruthy();
  expect(
    taskItemTextContents.some((s) => s.match(`Test 8 ${now}`)),
  ).toBeTruthy();
});

test('Tasks Tests: Details page editing', async ({ page }) => {
  const now = Date.now();
  await login(page, { email: 'alice@tasker.io', password: '123456' });

  await page.goto('/tasks');

  await createTask(page);

  // Go to created task
  const tasks = page.locator('[data-testid=my-tasks] [data-testid=task-item]');
  const taskCount = await tasks.count();
  const lastTask = tasks.nth(taskCount - 1);
  await lastTask.click();
  await page.waitForTimeout(process.env.CI ? 10_000 : 1000);

  await page.fill('[data-testid=task-input-title]', `New title ${now}`);
  await page.fill(
    '[data-testid=task-input-description]',
    `New description ${now}`,
  );
  await page.fill(
    '[data-testid=task-input-dueAt]',
    format(new Date(), 'yyyy-MM-dd'),
  );

  // Wait for data to update then reload
  await page.waitForTimeout(process.env.CI ? 10_000 : 1000);
  await page.reload();

  expect(
    await page.locator('[data-testid=task-input-title]').inputValue(),
  ).toEqual(`New title ${now}`);
  expect(
    await page.locator('[data-testid=task-input-description]').inputValue(),
  ).toEqual(`New description ${now}`);
  expect(
    await page.locator('[data-testid=task-input-dueAt]').inputValue(),
  ).toEqual(format(new Date(), 'yyyy-MM-dd'));
});

test('Tasks Test: Delete tasks', async ({ page }) => {
  const now = Date.now();
  await login(page, { email: 'alice@tasker.io', password: '123456' });
  await page.goto('/tasks');

  const tasks = page.locator('[data-testid=task-item]');

  await createTask(page, {
    title: `Test 1 ${now}`,
    description: `Test ${now}`,
    project: 'Engineering',
    assignToMe: true,
  });
  await createTask(page, {
    title: `Test 2 ${now}`,
    description: `Test ${now}`,
    project: 'Engineering',
    assignToMe: true,
  });

  await page.waitForTimeout(process.env.CI ? 2000 : 200);

  while ((await tasks.count()) > 0) {
    // Go to details view
    await tasks.first().click();
    await page.waitForTimeout(process.env.CI ? 1000 : 100);
    await page.click(`[data-testid=task-delete]`);
    // Back in project page
    await page.waitForTimeout(process.env.CI ? 1000 : 100);
  }
});
