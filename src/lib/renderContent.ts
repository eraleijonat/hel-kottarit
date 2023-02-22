import type { RegisteredComponent } from '@builder.io/sdk-svelte';
import InstagramFeed from './instagramFeed.svelte';
import NavigateButton from './NavigateButton.svelte';

export const BUILDER_PUBLIC_API_KEY = '974369f91b9843f2a04b2475e80baf4a';

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
	{
		component: NavigateButton,
		name: 'Navigate button',
		canHaveChildren: false,
		builtIn: true,
		inputs: [
			{
				name: 'href',
				type: 'string',
				defaultValue: ''
			},
			{
				name: 'text',
				type: 'string',
				defaultValue: ''
			}
		]
	},
	{
		component: InstagramFeed,
		name: 'Instagram feed',
		canHaveChildren: false,
		builtIn: true
	}
];
