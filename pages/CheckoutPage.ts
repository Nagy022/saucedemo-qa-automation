import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  // التحقق من وجودنا في صفحة معلومات الدفع
  async assertOnCheckoutStepOne(): Promise<void> {
    await expect(this.page).toHaveURL(/.*checkout-step-one.html/);
  }

  // التحقق من وجودنا في صفحة المراجعة
  async assertOnCheckoutStepTwo(): Promise<void> {
    await expect(this.page).toHaveURL(/.*checkout-step-two.html/);
  }

  // تعبئة معلومات الدفع
  async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  // المتابعة لمراجعة الطلب
  async continueToOverview(): Promise<void> {
    await this.continueButton.click();
  }
}