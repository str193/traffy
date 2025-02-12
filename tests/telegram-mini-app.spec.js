const { test, expect } = require('@playwright/test');

test('Открытие Telegram Mini App', async ({ page }) => {
    // Открываем Telegram Web
    await page.goto('https://web.telegram.org/a/');

    // Ждём, пока загрузится список чатов
    await page.waitForSelector('[data-peer-id]', { timeout: 20000 });

    // Ищем чат с ботом
    const botChat = page.locator('[data-peer-id="7716115568"]');
    await expect(botChat).toBeVisible();
    await botChat.click();

    // Находим поле ввода сообщения и вводим "/start"
    const messageInput = page.locator('.input-message-input');
    await messageInput.fill('/start');
    await messageInput.press('Enter');

    // Ждём, пока появится кнопка "Начать"
    const startButton = page.locator('.reply-markup');
    

    // Кликаем по кнопке
    await startButton.click();

    // Проверяем, что открылась вкладка с заголовком "traftesttest"
    const tabTitle = page.locator('._BrowserHeaderTabTitle_m63td_102', { hasText: 'traftesttest' });
    await expect(tabTitle).toBeVisible();
});