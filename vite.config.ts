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
        ...configDefaults.exclude,  
        'src/mocks/*',              
        'src/main.tsx',             
      ],
    },
    exclude: [...configDefaults.exclude, 'src/mocks/*'],  
  },
})