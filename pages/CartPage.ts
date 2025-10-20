import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  // التحقق من وجودنا في صفحة السلة
  async assertOnCartPage(): Promise<void> {
    await expect(this.page).toHaveURL(/.*cart.html/);
  }

  // التحقق من وجود المنتج في السلة
  async assertItemInCart(itemName: string): Promise<void> {
    const item = this.cartItems.filter({ hasText: itemName });
    await expect(item).toBeVisible();
  }

  // المتابعة للدفع
  async proceedToCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }
}