import { BUILDER_PUBLIC_API_KEY } from '$lib/builder/renderContent';
import { getContent } from '@builder.io/sdk-svelte';
import type { BuilderContent } from '@builder.io/sdk-svelte/package/types/builder-content';

export async function load(): Promise<{
	content: BuilderContent | null;
}> {
	// fetch your Builder content
	const content = await getContent({
		model: 'page',
		apiKey: BUILDER_PUBLIC_API_KEY,
		options: undefined,
		userAttributes: {
			urlPath: '/lippukunta'
		}
	});
	return { content };
}

export const prerender = true;
