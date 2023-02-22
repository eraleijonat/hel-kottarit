<script lang="ts">
	import InstagramFeed from '$lib/instagramFeed.svelte';
	import NavigateButton from '$lib//NavigateButton.svelte';
	import { RenderContent } from '@builder.io/sdk-svelte';
	import { BUILDER_PUBLIC_API_KEY } from '../lib/renderContent';
	import Head from '../lib/head.svelte';

	export let data;
	let heroHeight: number | undefined;
</script>

<Head image={`${data.content.data.heroImage}?width=1200`} />

<div class="heroWrapper">
	<div
		class="hero"
		style={`background-image: url(${data.content.data.heroImage}); ${
			heroHeight ? `height: ${heroHeight - 72}px;` : ''
		}`}
	>
		<h1 class="heroTitle">{data.content.data.heroTitle}</h1>
		<p class="heroText">{data.content.data.heroText}</p>
	</div>
</div>
<div class="content">
	<div class="section">
		<RenderContent
			model="page"
			content={data.content}
			apiKey={BUILDER_PUBLIC_API_KEY}
			customComponents={[
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
			]}
		/>
	</div>
</div>

<style lang="scss">
	@use '../src/style/_variables.scss';
	.heroWrapper {
		background: rgba(18, 18, 18, 1);
	}
	.hero {
		height: 600px;
		padding: 0 20px;

		background-size: cover;
		mask-image: linear-gradient(
			to bottom,
			#fff 0px,
			#fff 85%,
			rgba(255, 255, 255, 0.2) 92%,
			transparent
		);
		-webkit-mask-image: linear-gradient(
			to bottom,
			#fff 0px,
			#fff 85%,
			rgba(255, 255, 255, 0.2) 92%,
			transparent
		);

		background-position: 20%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		@media (min-width: variables.$sm) {
			height: 900px;
			padding: 0px;
		}
	}
	.heroTitle {
		font-size: 30px;
		color: #fff;
		font-weight: 600;
		text-shadow: 2px 2px 4px #000;

		@media (min-width: variables.$sm) {
			font-size: 54px;
		}
		@media (min-width: variables.$md) {
			font-size: 60px;
		}
		@media (min-width: variables.$lg) {
			font-size: 72px;
		}
	}
	.heroText {
		padding: 12px 32px;
		background-color: rgba(0, 0, 0, 0.4);
		border-radius: 8px;
		font-size: 16px;
		color: #fff;

		@media (min-width: variables.$sm) {
			font-size: 20px;
		}
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		background: linear-gradient(
			180deg,
			rgba(18, 18, 18, 1) 0%,
			rgba(15, 21, 18, 1) 50%,
			rgba(23, 23, 23, 1) 100%
		);
	}

	.section {
		padding: 80px 20px;
		max-width: 90%;

		@media (min-width: variables.$sm) {
			padding: 80px 32px;
		}
		@media (min-width: variables.$xl) {
			max-width: 80%;
		}
	}
	* {
		color: variables.$text-light;
	}
</style>
