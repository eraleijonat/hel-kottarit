import { getContent, RenderContent, type RegisteredComponent } from '@builder.io/sdk-svelte';

import InstagramFeed from '$lib/instagramFeed.svelte';

const REGISTERED_COMPONENTS = [
	{
		component: InstagramFeed,
		name: 'Hello World',
		canHaveChildren: false,
		image:
			'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-1024.png',
		inputs: []
	}
];

export const CUSTOM_COMPONENTS: RegisteredComponent = [
	{
		component: InstagramFeed,
		name: 'Instagram Feed',
		builtIn: '',
		REGISTERED_COMPONENTS,
		canHaveChildren: false,
		inputs: []
	}
];
