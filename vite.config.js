// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// import autoprefixer from 'autoprefixer' 

// // https://vitejs.dev/config/
// export default defineConfig({
//   theme: {
//     extend: {
//       fontFamily: {
//         jost: ['Jost', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [react(),tailwindcss()],

  
// })
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   css: {
//     postcss: {
//       plugins: [
//         require('tailwindcss'),
//         require('autoprefixer'),
//       ],
//     },
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],

});
