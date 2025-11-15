import { test, expect } from "@playwright/test";

test("shows hello", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toHaveText(/Hello Microproject/i);
});
