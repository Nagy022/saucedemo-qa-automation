import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  private readonly page: Page;
  private readonly productsContainer: Locator;
  private readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    // استخدم selector أكثر تحديداً بدلاً من #inventory_container
    this.productsContainer = page.locator('[data-test="inventory-container"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async assertSuccessfulLogin(): Promise<void> {
    // التحقق من URL أولاً
    await expect(this.page).toHaveURL(/.*inventory.html/);
    
    // استخدام waitForSelector بدلاً من expect().toBeVisible() للمشكلة السابقة
    await this.page.waitForSelector('[data-test="inventory-container"]', { 
      state: 'visible', 
      timeout: 10000 
    });
    
    // أو التحقق من ظهور أي منتج
    const productItems = this.page.locator('.inventory_item');
    await expect(productItems.first()).toBeVisible();
  }

  // الدوال الأخرى...
  async addProductToCart(productName: string): Promise<void> {
    const productItem = this.page.locator('.inventory_item', { hasText: productName });
    const addToCartButton = productItem.locator('button:has-text("Add to cart")');
    await addToCartButton.click();
  }

  async assertCartItemCount(expectedCount: number): Promise<void> {
    if (expectedCount > 0) {
      await expect(this.cartBadge).toHaveText(expectedCount.toString());
    } else {
      // إذا كان المتوقع 0، تحقق أن الـ badge غير ظاهر
      await expect(this.cartBadge).not.toBeVisible();
    }
  }

  async goToCart(): Promise<void> {
    await this.page.locator('.shopping_cart_link').click();
  }
}