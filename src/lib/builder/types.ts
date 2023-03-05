export type BuilderProps = {
	'builder-id': string;
	style: string | undefined;
	class: string;
};

export type Data = {
	previewUrl: string;
	createdDate: number;
	query: object[][];

	lastUpdated: number;
	modelId: string;
	published: 'published' | string;
	id: string;
	variations: object;
	testRatio: number;
	lastUpdatedBy: string;
	folders: [];
	firstPublished: number;
	meta: {
		lastPreviewUrl: string;
		hasLinks: boolean;
		kind: string;
		componentsUsed: object[];
		breakpoints: object[];
		needsHydration: boolean;
	};
	name: string;
	createdBy: string;
	rev: string;
};

export type HeroPageData = {
	content: {
		data: {
			heroImage?: string;
			themeId: boolean;
			title: string;
			inputs: [];
			// jsCode: string;
			description?: string;
			heroText?: string;
			variant: 'light' | 'dark';
			heroTitle?: string;
			blocks: [];
			url: string;
			state: [];
		} & Data;
	};
};
