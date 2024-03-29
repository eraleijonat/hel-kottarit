import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import 'dotenv/config';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: true,
			strict: true
		})
	},
	onwarn: (warning, handler) => {
		const { code, filename } = warning;
		// supress warning global css unused selector
		if (code === 'css-unused-selector' && filename === '/src/routes/+layout.svelte') return;
		handler(warning);
	}
};

export default config;
