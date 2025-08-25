import { test, expect } from '@playwright/test';

test.describe('BasicFaq', () => {
  test('Check page title', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle('FaqAccordionAngular');
  });

  test('Check text in web', async ({ page, isMobile }) => {
    await page.goto('/');

    const card = await page.locator(".card");
    expect(card).toHaveCSS('border-radius', '8px');

    const element = await card.boundingBox();

    expect(element?.width).toBe(isMobile ? 330 : 550);

    await expect(page.getByText('FAQs')).toBeVisible();

    const faqItems = await page.locator("div.faq-item");

    const totalItems = await faqItems.count();
    await expect(totalItems).toBe(4);

    await expect(page.getByText('What is Frontend Mentor, and how will it help me?')).toBeVisible();
    await expect(page.getByText("Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.")).not.toBeVisible();

    const firstItem = faqItems.first();
    firstItem.click();

    await expect(page.getByText("Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.")).toBeVisible();

    await expect(page.getByText("The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it's easy to tell the difference.")).not.toBeVisible();
  });
});
