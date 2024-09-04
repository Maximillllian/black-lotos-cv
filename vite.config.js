import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 8000,
        host: '0.0.0.0'
    },
    plugins: [vue(), svgLoader()],
    assetsInclude: ['**/*.JPG'],
})
