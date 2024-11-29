import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:4000/kategori/frukt-och-gront');
  await page.getByRole('link', { name: 'Lotter' }).click();
  await page.getByRole('heading', { name: 'Triss Lott' }).click();
  await page.getByRole('link', { name: 'Tobak' }).click();
  await page.getByRole('link', { name: 'Djur', exact: true }).click();
  await page.getByRole('link', { name: 'Hund' }).click();
  await page.getByRole('link', { name: 'Hundmat våt' }).click();
  await page.getByRole('button', { name: '-' }).first().click();
  await page.getByRole('link', { name: 'Apotek' }).click();
  await page.getByRole('link', { name: 'Receptfria läkemedel' }).click();
  await page.getByRole('link', { name: 'Allergi' }).click();
  await page.getByRole('button', { name: '-' }).first().click();
  await page.getByRole('link', { name: 'Barn' }).click();
  await page.getByRole('link', { name: 'Barnmat & fruktdryck' }).click();
  await page.getByRole('link', { name: 'Barnmat 12 mån +' }).click();
  await page.getByRole('button', { name: '-' }).first().click();
  await page.getByRole('link', { name: 'Dryck' }).click();
  await page.getByRole('link', { name: 'Kaffe', exact: true }).click();
  await page.getByRole('link', { name: 'Hela bönor' }).click();
  await page.getByRole('link', { name: 'Te & choklad' }).click();
  await page.getByRole('button', { name: '-' }).first().click();
  await page.getByRole('link', { name: 'Fryst' }).click();
  await page.getByRole('link', { name: 'Kött, burgare & korv mm' }).click();
});