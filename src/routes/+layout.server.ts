import { BUILDER_PUBLIC_API_KEY } from '$lib/builder/renderContent';
import { getContent } from '@builder.io/sdk-svelte';

export async function load({ request, params, url }) {
	// fetch your Builder content
	const content = await getContent({
		model: 'page',
		apiKey: BUILDER_PUBLIC_API_KEY,
		options: undefined,
		userAttributes: {
			urlPath: url.pathname
		}
	});
	return { content };
}

export const prerender = true;
export const ssr = true;
