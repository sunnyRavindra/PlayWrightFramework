import { test, expect, type Page } from '@playwright/test';

// Open Browser
test('Open WebBrowser',async ({page}) =>{
  await page.goto("https://www.botcat.org");
});

test('Opne onather WebBrowser', async ({page}) =>{
  await page.goto("https://www.botcat.org");
});

test('Open WebBrowser 2',async ({page}) =>{
  await page.goto("https://www.botcat.org");
});

