import { defineConfig } from 'vite';
import history from 'connect-history-api-fallback';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        second: './project.html', // specify the path to the second HTML file
      }
    }
  },
  // base: '/',
  // plugins: [
  //   {
  //     name: 'history-fallback',
  //     configureServer(server) {
  //       server.middlewares.use(
  //         history({
  //         })
  //       );
  //     }
  //   }
  // ]
});
