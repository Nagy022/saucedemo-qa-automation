import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';

test.describe('سيناريو شراء المنتج من موقع SauceDemo', () => {
<<<<<<< HEAD
  // تعريف المتغيرات لكل الصفحات
=======
>>>>>>> 08b05fd82624c75887d93b180bf51dd68a3c05a0
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;
  let checkoutOverviewPage: CheckoutOverviewPage;

<<<<<<< HEAD
  // هذا بيتنفذ قبل كل اختبار
=======
>>>>>>> 08b05fd82624c75887d93b180bf51dd68a3c05a0
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    checkoutOverviewPage = new CheckoutOverviewPage(page);
  });

  test('تسجيل دخول وإضافة منتج وإتمام عملية الشراء', async ({ page }) => {
<<<<<<< HEAD
    // بيانات الاختبار
=======
>>>>>>> 08b05fd82624c75887d93b180bf51dd68a3c05a0
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

<<<<<<< HEAD
    // الخطوة 4: إضافة منتج للسلة
    await test.step('إضافة حقيبة الظهر للسلة', async () => {
      await inventoryPage.addProductToCart(testData.itemName);
      await inventoryPage.assertCartItemCount(1);
    });

    // الخطوة 5: الذهاب للسلة وإتمام الشراء
    await test.step('الذهاب للسلة والمتابعة للدفع', async () => {
      await inventoryPage.goToCart();
      await cartPage.assertOnCartPage();
      await cartPage.assertItemInCart(testData.itemName);
      await cartPage.proceedToCheckout();
    });

    // الخطوة 6: تعبئة معلومات الدفع
    await test.step('تعبئة معلومات الدفع', async () => {
      await checkoutPage.assertOnCheckoutStepOne();
      await checkoutPage.fillCheckoutInformation(
        testData.customerInfo.firstName,
        testData.customerInfo.lastName,
        testData.customerInfo.postalCode
      );
      await checkoutPage.continueToOverview();
    });

    // الخطوة 7: التحقق النهائي
    await test.step('التحقق من صفحة المراجعة والسعر الإجمالي', async () => {
      await checkoutPage.assertOnCheckoutStepTwo();
      await checkoutOverviewPage.assertItemInOverview(testData.itemName);
      await checkoutOverviewPage.assertTotalPriceDisplayed();
    });
=======
    // باقي الخطوات...
>>>>>>> 08b05fd82624c75887d93b180bf51dd68a3c05a0
  });
});