import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly productsContainer: Locator;
  readonly shoppingCartBadge: Locator;
  readonly shoppingCartLink: Locator;

  constructor(page: Page) {
    this.page = page;
   this.productsContainer = page.locator('[data-test="inventory-container"]');
    this.shoppingCartBadge = page.locator('.shopping_cart_badge');
    this.shoppingCartLink = page.locator('.shopping_cart_link');
  }

  // التحقق من تسجيل الدخول الناجح
  async assertSuccessfulLogin(): Promise<void> {
    await expect(this.page).toHaveURL(/.*inventory.html/);
    await expect(this.productsContainer).toBeVisible();
  }

  // إضافة منتج للسلة
  async addItemToCart(itemName: string): Promise<void> {
    const itemContainer = this.page.locator('.inventory_item', { hasText: itemName });
    const addToCartButton = itemContainer.locator('button').filter({ hasText: 'Add to cart' });
    await addToCartButton.click();
  }

  // التحقق من عدد المنتجات في السلة
  async assertCartItemCount(expectedCount: number): Promise<void> {
    await expect(this.shoppingCartBadge).toHaveText(expectedCount.toString());
  }

  // الذهاب لعرض السلة
  async goToCart(): Promise<void> {
    await this.shoppingCartLink.click();
  }
}