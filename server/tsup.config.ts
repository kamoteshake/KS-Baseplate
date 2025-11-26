import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['cjs'],
  target: 'node20',
  sourcemap: true,
  clean: true,
  dts: false, // you can change to true later if you want .d.ts files
  minify: false,
});
