import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const ReactConfig = {
  babel: {
    plugins: ['babel-plugin-react-compiler'],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(ReactConfig)],
});
