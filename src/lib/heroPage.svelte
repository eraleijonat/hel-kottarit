<script lang="ts">
	import Head from '../lib/head.svelte';
	import BuilderContent from '$lib/builder/builderContent.svelte';
	import type { HeroPageContent } from './builder/types';

	export let content: HeroPageContent;
	const shortHeroHeight = 400;
	let screenHeight: number = shortHeroHeight;
</script>

<Head
	title={content.data?.title}
	description={content.data?.description}
	image={`${content.data?.heroImage}?width=1200`}
/>

<svelte:window bind:innerHeight={screenHeight} />
<div class:wrapperDark={content.data?.variant === 'dark'}>
	{#if content.data}
		<div
			class="hero"
			class:heroFade={content.data.heroHeight === 'full' || content.data.variant === 'dark'}
			class:heroTint={content.data.heroHeight === 'short'}
			style="--heroImage: url({content.data.heroImage}); --heroHeight: {content.data.heroHeight ===
			'short'
				? shortHeroHeight
				: screenHeight - 72}px; --heroImagePosition: {content.data.heroImagePosition}"
		>
			<h1 class="heroTitle">{content.data.heroTitle ?? ''}</h1>
			{#if content.data.heroText}<p class="heroText">
					{content.data.heroText}
				</p>{/if}
		</div>
		<BuilderContent {content} />
	{/if}
</div>

<style lang="scss">
	@use '../src/style/_variables.scss';
	.wrapperDark {
		background: variables.$secondary-extra-dark;
		color: variables.$text-light;
	}
	.hero {
		align-items: center;
		background-size: cover;
		background-image: var(--heroImage);
		background-blend-mode: multiply;
		background-position: var(--heroImagePosition);
		display: flex;
		flex-direction: column;
		height: var(--heroHeight);
		justify-content: center;
	}
	.heroTint {
		background-color: rgba(0, 0, 0, 0.4);
	}
	.heroFade {
		background-color: #fff;
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
	}
	.heroTitle {
		color: #fff;
		font-weight: 600;
		text-shadow: 4px 4px 8px #000;
	}
	.heroText {
		padding: 12px 32px;
		border-radius: 8px;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.4);

		@media (min-width: variables.$sm) {
			font-size: variables.$font-size-3;
			letter-spacing: 0.2rem;
		}
	}
</style>
