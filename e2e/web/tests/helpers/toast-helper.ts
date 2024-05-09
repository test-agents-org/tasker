import type { Page } from '@playwright/test';

export async function waitForToastVisible(page: Page) {
  const toast = await page.waitForSelector('[data-testid=toast]');
  while (!(await toast.isVisible())) {
    await page.waitForTimeout(500);
  }
}

export async function waitForToastHidden(page: Page) {
  const toast = await page.waitForSelector('[data-testid=toast]');
  while (await toast.isVisible()) {
    await page.waitForTimeout(500);
  }
}
