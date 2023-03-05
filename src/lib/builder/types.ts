import type { BuilderContent } from '@builder.io/sdk-svelte/package/types/builder-content';

export type BuilderAttributes = {
	style?: string;
	class?: string;
};

export type Content = {
	previewUrl: string;
	createdDate: number;
	query: object[][];

	testRatio: number;
	lastUpdatedBy: string;
	folders: [];
	firstPublished: number;
	meta: {
		lastPreviewUrl: string;
		hasLinks: boolean;
		kind: string;
		componentsUsed: object[];
		needsHydration: boolean;
	};

	createdBy: string;
	rev: string;
};

export type HeroPageContent = {
	data: {
		heroImage?: string;
		description?: string;
		heroText?: string;
		heroHeight: 'short' | 'long';
		variant: 'light' | 'dark';
		heroTitle?: string;
	};
} & Content &
	BuilderContent;
