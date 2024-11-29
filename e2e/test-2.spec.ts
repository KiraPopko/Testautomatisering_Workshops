import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:4000/kategori/frukt-och-gront');
  await page.getByRole('link', { name: 'Skafferi' }).click();
  await page.getByRole('link', { name: 'Oliver & delikatesser' }).click();
  await page.getByRole('link', { name: 'Olja & vinäger' }).click();
  await page.getByRole('link', { name: 'Olivolja' }).click();
  
  await page.getByRole('link', { name: 'Kryddmix' }).click();
  
  await page.getByRole('link', { name: 'Grönsakskonserver' }).click();
  await page.getByRole('link', { name: 'Torra baljväxter' }).click();
  await page.getByText('Torra baljväxter-Fröer & kä').click();
  await page.getByRole('link', { name: 'Fröer & kärnor' }).click();
  await page.getByRole('link', { name: 'Bakning' }).click();
  await page.getByRole('link', { name: 'Baktillbehör' }).click();
  
  await page.getByRole('link', { name: 'Fryst' }).click();
  await page.getByRole('link', { name: 'Kött & fågel' }).click();
  await page.getByRole('link', { name: 'Fågel', exact: true }).click();
  
  await page.getByRole('link', { name: 'Receptfria läkemedel' }).click();
});