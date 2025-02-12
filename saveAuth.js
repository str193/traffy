const { chromium } = require('@playwright/test');

console.log('✅ Скрипт запущен...');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    console.log('🌍 Открываем Telegram Web...');
    await page.goto('https://web.telegram.org/a/');

    console.log('🔹 Авторизуйся вручную и нажми ENTER в терминале...');
    
    process.stdin.once('data', async () => {
        await context.storageState({ path: 'auth.json' });
        console.log('✅ Сессия сохранена в auth.json');
        await browser.close();
        process.exit();
    });
})();