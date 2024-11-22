import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:4000/kategori/frukt-och-gront');
  await page.locator('div').filter({ hasText: /^Skafferi\+$/ }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^Oliver & delikatesser\+$/ }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^Kryddor & smaksättare\+$/ }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^Olja & vinäger\+$/ }).getByRole('button').click();
});