// Add this to your imports
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    //.... other plugins
    vue(),
    vueJsx(),
  ],
});
