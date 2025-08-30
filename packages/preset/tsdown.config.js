import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: 'src/index.ts',
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  outDir: 'dist',
  target: 'es2020',
  sourcemap: true,
  minify: true,
  splitting: false,
});
