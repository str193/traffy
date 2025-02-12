import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Указываем папку с тестами
  timeout: 60000, // Увеличиваем таймаут до 60 секунд
  use: {
    storageState: 'auth.json', // Используем сохранённую авторизацию
    headless: false, // Запуск в видимом режиме (можно убрать)
    video: 'on', // Сохраняем видео (для отладки)
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});