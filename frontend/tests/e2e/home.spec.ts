import { test, expect } from '@playwright/test'

test('homepage displays backend OK status', async ({ page }) => {
  await page.goto('http://localhost:3001')
  await expect(page.locator('p')).toContainText('"status":"OK"')
})
