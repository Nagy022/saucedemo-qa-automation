import { Page, Locator, expect } from '@playwright/test';

export class CheckoutOverviewPage {
  readonly page: Page;
  readonly inventoryItem: Locator;
  readonly totalLabel: Locator;
  readonly finishButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryItem = page.locator('.inventory_item_name');
    this.totalLabel = page.locator('.summary_total_label');
    this.finishButton = page.locator('[data-test="finish"]');
  }

  // التحقق من وجود المنتج في صفحة المراجعة
  async assertItemInOverview(itemName: string): Promise<void> {
    await expect(this.inventoryItem.filter({ hasText: itemName })).toBeVisible();
  }

  // التحقق من ظهور السعر الإجمالي
  async assertTotalPriceDisplayed(): Promise<void> {
    await expect(this.totalLabel).toBeVisible();
    const totalText = await this.totalLabel.textContent();
    expect(totalText).toMatch(/Total: \$\d+\.\d+/);
  }
}