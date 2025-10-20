import { test, expect } from '@playwright/test';

<<<<<<< HEAD
test.describe('JSONPlaceholder API Tests', () => {
  const baseURL = 'https://jsonplaceholder.typicode.com';

  test('GET /posts/1 - يجب أن يعيد بيانات المنشور بشكل صحيح', async ({ request }) => {
    // Step 1: إرسال طلب GET
    const response = await request.get(`${baseURL}/posts/1`);

    // Step 2: التحقق من رمز الحالة HTTP
    await test.step('التحقق من أن رمز الحالة هو 200', async () => {
      expect(response.status()).toBe(200);
    });

    // Step 3: التحقق من رأس الاستجابة
    await test.step('التحقق من رأس Content-Type', async () => {
      const contentType = response.headers()['content-type'];
      expect(contentType).toBe('application/json; charset=utf-8');
    });

    // Step 4: التحقق من هيكل جسم الاستجابة
    await test.step('التحقق من هيكل جسم الاستجابة', async () => {
      const responseBody = await response.json();
      
      // التحقق من وجود جميع الحقول المطلوبة
      expect(responseBody).toHaveProperty('userId');
      expect(responseBody).toHaveProperty('id');
      expect(responseBody).toHaveProperty('title');
      expect(responseBody).toHaveProperty('body');

      // التحقق من أنواع البيانات
      expect(typeof responseBody.userId).toBe('number');
      expect(typeof responseBody.id).toBe('number');
      expect(typeof responseBody.title).toBe('string');
      expect(typeof responseBody.body).toBe('string');
    });

    // Step 5: التحقق من محتوى جسم الاستجابة
    await test.step('التحقق من محتوى جسم الاستجابة', async () => {
      const responseBody = await response.json();
      
      // التحقق من أن id يساوي 1
      expect(responseBody.id).toBe(1);
      
      // التحقق من أن العنوان والجسم ليسا فارغين
      expect(responseBody.title).not.toBe('');
      expect(responseBody.title.length).toBeGreaterThan(0);
      
      expect(responseBody.body).not.toBe('');
      expect(responseBody.body.length).toBeGreaterThan(0);
    });
  });

  test('GET /posts/1 - يجب أن يحتوي على بيانات ذات جودة عالية', async ({ request }) => {
    const response = await request.get(`${baseURL}/posts/1`);
    const responseBody = await response.json();

    // تحقق إضافي لجودة البيانات
    await test.step('التحقق من جودة البيانات', async () => {
      expect(responseBody.userId).toBeGreaterThanOrEqual(1);
      expect(responseBody.id).toBe(1);
      
      // التحقق من أن النص ليس مجرد مسافات
      expect(responseBody.title.trim().length).toBeGreaterThan(0);
      expect(responseBody.body.trim().length).toBeGreaterThan(0);
      
      // التحقق من أن العنوان يبدأ بحرف كبير (كتحقق إضافي)
      const firstChar = responseBody.title.charAt(0);
      expect(firstChar).toMatch(/[a-zA-Z]/);
    });
  });

  test('GET /posts/99999 - يجب أن يعيد 404 للمنشور غير الموجود', async ({ request }) => {
    const response = await request.get(`${baseURL}/posts/99999`);
    
    await test.step('التحقق من أن المنشور غير موجود', async () => {
      expect(response.status()).toBe(404);
    });
  });
=======
/**
 * Part 2: API Endpoint Testing
 * Objective: Test JSONPlaceholder REST API endpoints
 * Endpoint: GET https://jsonplaceholder.typicode.com/posts/1
 */

test.describe('JSONPlaceholder API Tests - Posts Endpoint', () => {
  const baseURL = 'https://jsonplaceholder.typicode.com';

  test('GET /posts/1 - should return post data with correct structure and status', async ({ request }) => {
    // Step 1: Send GET request to the endpoint
    await test.step('Send GET request to /posts/1', async () => {
      const response = await request.get(`${baseURL}/posts/1`);
      
      // Step 2: Validate HTTP Status Code
      await test.step('Validate response status code is 200', async () => {
        expect(response.status()).toBe(200);
      });

      // Step 3: Validate Response Headers
      await test.step('Validate Content-Type header is application/json', async () => {
        const contentType = response.headers()['content-type'];
        expect(contentType).toBe('application/json; charset=utf-8');
      });

      // Step 4: Parse and Validate Response Body Structure
      await test.step('Validate response body structure and data types', async () => {
        const responseBody = await response.json();
        
        // Check all required fields exist
        expect(responseBody).toHaveProperty('userId');
        expect(responseBody).toHaveProperty('id');
        expect(responseBody).toHaveProperty('title');
        expect(responseBody).toHaveProperty('body');

        // Validate data types
        expect(typeof responseBody.userId).toBe('number');
        expect(typeof responseBody.id).toBe('number');
        expect(typeof responseBody.title).toBe('string');
        expect(typeof responseBody.body).toBe('string');
      });

      // Step 5: Validate Response Body Content
      await test.step('Validate response body content values', async () => {
        const responseBody = await response.json();
        
        // Validate specific field values
        expect(responseBody.id).toBe(1);
        expect(responseBody.title).not.toBe('');
        expect(responseBody.body).not.toBe('');
        expect(responseBody.title.length).toBeGreaterThan(0);
        expect(responseBody.body.length).toBeGreaterThan(0);
      });
    });
  });

  test('GET /posts/1 - should have valid post content', async ({ request }) => {
    const response = await request.get(`${baseURL}/posts/1`);
    const responseBody = await response.json();

    await test.step('Validate post content quality', async () => {
      expect(response.status()).toBe(200);
      
      // Validate data integrity
      expect(responseBody.userId).toBeGreaterThanOrEqual(1);
      expect(responseBody.id).toBe(1);
      
      // Validate text content is meaningful
      expect(responseBody.title.trim().length).toBeGreaterThan(0);
      expect(responseBody.body.trim().length).toBeGreaterThan(0);
    });
  });

  test('GET /posts/99999 - should return 404 for non-existent post', async ({ request }) => {
    const response = await request.get(`${baseURL}/posts/99999`);
    
    await test.step('Validate 404 response for non-existent resource', async () => {
      expect(response.status()).toBe(404);
    });
  });

  test('GET /posts - should return array of posts', async ({ request }) => {
    const response = await request.get(`${baseURL}/posts`);
    
    await test.step('Validate posts list response', async () => {
      expect(response.status()).toBe(200);
      
      const responseBody = await response.json();
      expect(Array.isArray(responseBody)).toBe(true);
      expect(responseBody.length).toBeGreaterThan(0);
      
      // Validate first post structure
      const firstPost = responseBody[0];
      expect(firstPost).toHaveProperty('id');
      expect(firstPost).toHaveProperty('title');
      expect(firstPost).toHaveProperty('body');
      expect(firstPost).toHaveProperty('userId');
    });
  });
>>>>>>> 08b05fd82624c75887d93b180bf51dd68a3c05a0
});