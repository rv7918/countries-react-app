import { defineConfig, configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      provider: 'istanbul',
      exclude: [
        ...configDefaults.exclude,  // Default exclusions
        'src/mocks/*',              // Exclude the mocks folder
        'src/main.tsx',             // Exclude main.tsx file
      ],
    },
    exclude: [...configDefaults.exclude, 'src/mocks/*'],  // Test exclusions
  },
})