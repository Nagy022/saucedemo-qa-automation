import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
<<<<<<< HEAD
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
=======
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
>>>>>>> 08b05fd82624c75887d93b180bf51dd68a3c05a0
  }
}