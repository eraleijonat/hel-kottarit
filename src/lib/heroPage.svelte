<script lang="ts">
	import Head from '../lib/head.svelte';
	import BuilderContent from '$lib/builder/builderContent.svelte';
	import type { HeroPageContent } from './builder/types';

	export let content: HeroPageContent;
</script>

<Head
	title={content.data?.title}
	description={content.data?.description}
	image={`${content.data?.heroImage}?width=1200`}
/>

<div
	class:wrapperDark={content.data?.variant === 'dark'}
	class:wrapperLight={content.data?.variant === 'light'}
>
	{#if content.data}
		<div
			class="hero"
			class:heroFade={content.data.heroHeight === 'full' || content.data.variant === 'dark'}
			class:heroTint={content.data.heroHeight === 'short'}
			class:heroShort={content.data.heroHeight === 'short'}
			class:heroFull={content.data.heroHeight === 'full'}
			style="--heroImage: url({content.data.heroImage}); --heroImagePosition: {content.data
				.heroImagePosition}"
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
		background-color: variables.$secondary-extra-dark;
		color: variables.$text-light;
	}
	.wrapperLight {
		background-color: variables.$main-extra-light;
		color: variables.$text-dark;
	}
	.hero {
		align-items: center;
		background-size: cover;
		background-image: var(--heroImage);
		background-blend-mode: multiply;
		background-position: var(--heroImagePosition);
		display: flex;
		flex-direction: column;
		background-color: rgba(0, 0, 0, 0.15);
		justify-content: center;
	}
	.heroShort {
		height: 200px;

		@media (min-width: variables.$sm) {
			height: 300px;
		}

		@media (min-width: variables.$lg) {
			height: 400px;
		}
	}
	.heroFull {
		height: calc(100vh - variables.$header-offset);
	}
	.heroTint {
		background-color: rgba(0, 0, 0, 0.4);
	}
	.heroFade {
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
