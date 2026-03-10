import { test, expect } from '@playwright/test';

test('check console errors', async ({ page }) => {
  const errors: string[] = [];
  const logs: string[] = [];
  
  page.on('console', msg => {
    const text = msg.text();
    if (msg.type() === 'error') {
      errors.push(text);
      console.log('❌ Browser error:', text);
    } else {
      logs.push(text);
      console.log('📝 Browser log:', text);
    }
  });
  
  page.on('pageerror', error => {
    console.log('💥 Page error:', error.message);
    errors.push(error.message);
  });
  
  console.log('🌐 Navigating to http://localhost:5173');
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  
  console.log('📸 Taking screenshot...');
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
  
  console.log('\n=== Summary ===');
  console.log('Errors found:', errors.length);
  console.log('Logs found:', logs.length);
  
  if (errors.length > 0) {
    console.log('\n❌ Errors:');
    errors.forEach(e => console.log('  -', e));
  }
});
