import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import {
  remarkRelativeMdLinks,
  starlightPreset,
} from '@syntax-syllogism/docs-theme';

const BASE = '/ss-smoke/docs';

export default defineConfig({
  site: 'https://syntax-syllogism.com',
  base: BASE,
  outDir: './dist',
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [[remarkRelativeMdLinks, { base: BASE, docsRoot: '../docs' }]],
  },
  integrations: [
    starlight(
      starlightPreset({
        title: 'SS Smoke',
        base: BASE,
        toolSlug: 'ss-smoke',
        publicRepo: 'Syntax-Syllogism/ss-smoke',
      }),
    ),
    starlightLinksValidator(),
  ],
});
