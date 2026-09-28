import { defineConfig, devices } from '@playwright/test';

const basePath = (process.env.BASE_PATH || '/Portfolio').replace(/\/?$/, '/');

export default defineConfig({
  testDir: './tests-e2e',
  use: { baseURL: `http://localhost:4321${basePath}` },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 7'] } },
  ],
  webServer: {
    command: 'npm run build && npm run preview',
    url: `http://localhost:4321${basePath}`,
    reuseExistingServer: !process.env.CI,
  },
});
