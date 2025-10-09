import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';

test.describe('سيناريو شراء المنتج من موقع SauceDemo', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;
  let checkoutOverviewPage: CheckoutOverviewPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    checkoutOverviewPage = new CheckoutOverviewPage(page);
  });

  test('تسجيل دخول وإضافة منتج وإتمام عملية الشراء', async ({ page }) => {
    const testData = {
      username: 'standard_user',
      password: 'secret_sauce',
      itemName: 'Sauce Labs Backpack',
      customerInfo: {
        firstName: 'John',
        lastName: 'Doe',
        postalCode: '12345'
      }
    };

    // الخطوة 1: الذهاب لموقع SauceDemo
    await test.step('الذهاب لموقع SauceDemo', async () => {
      await loginPage.navigate();
      await expect(page).toHaveURL('https://www.saucedemo.com/');
    });

    // الخطوة 2: تسجيل الدخول
    await test.step('تسجيل الدخول باستخدام بيانات صحيحة', async () => {
      await loginPage.login(testData.username, testData.password);
    });

    // الخطوة 3: التحقق من تسجيل الدخول الناجح
    await test.step('التحقق من تسجيل الدخول الناجح', async () => {
      await inventoryPage.assertSuccessfulLogin();
    });

    // باقي الخطوات...
  });
});