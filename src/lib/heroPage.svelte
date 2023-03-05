<script lang="ts">
	import Head from '../lib/head.svelte';
	import BuilderContent from '$lib/builder/builderContent.svelte';
	import type { HeroPageData } from './builder/types';

	export let data: HeroPageData;
	let heroHeight: number | undefined;
</script>

<Head image={`${data.content.data.heroImage}?width=1200`} />

<div class="heroWrapper">
	<div
		class="hero"
		class:heroDark={data.content.data.variant === 'dark'}
		style="--heroImage: url({data.content.data.heroImage}); --heroHeight: {heroHeight}px;"
	>
		<h1 class="heroTitle">{data.content.data.heroTitle}</h1>
		{#if data.content.data.heroText}<p class="heroText">{data.content.data.heroText}</p>{/if}
	</div>
</div>
<div class="content">
	<BuilderContent content={data.content} />
</div>

<style lang="scss">
	@use '../src/style/_variables.scss';
	.heroWrapper {
		background: variables.$secondary-extra-dark;
	}
	.hero {
		height: 600px;
		padding: 0 20px;
		background-size: cover;
		background-image: var(--heroImage);
		background-color: rgba(255, 255, 255, 0.9);
		height: calc(var(--heroHeight) - 72px);
		background-blend-mode: multiply;
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
	.heroDark {
		background-color: rgba(0, 0, 0, 0.1);
	}
	.heroTitle {
		color: #fff;
		font-weight: 600;
		text-shadow: 4px 4px 8px #000;
	}
	.heroText {
		padding: 12px 32px;
		background-color: rgba(0, 0, 0, 0.4);
		border-radius: 8px;
		color: #fff;

		@media (min-width: variables.$sm) {
			font-size: variables.$font-size-3;
			letter-spacing: 0.2rem;
		}
	}
	.content {
		background: variables.$secondary-extra-dark;
		color: variables.$text-light;
	}
</style>
