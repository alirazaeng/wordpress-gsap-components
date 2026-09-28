import { build } from 'esbuild';

await build({
  entryPoints: ['src/js/index.js'],
  bundle: true,
  minify: true,
  sourcemap: true,
  format: 'iife',
  globalName: 'ARGSAPComponents',
  target: ['es2019'],
  outfile: 'dist/gsap-components.min.js',
  legalComments: 'none'
});
