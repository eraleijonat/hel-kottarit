import { getContent } from '@builder.io/sdk-svelte';
import { BUILDER_PUBLIC_API_KEY } from '../../lib/builder/renderContent';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// fetch your Builder content
	const content = await getContent({
		model: 'page',
		apiKey: BUILDER_PUBLIC_API_KEY,
		options: undefined,
		userAttributes: {
			urlPath: '/huoltajille'
		}
	});

	return { content };
}
