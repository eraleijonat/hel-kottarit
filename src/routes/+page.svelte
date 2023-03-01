<script lang="ts">
	import Head from '../lib/head.svelte';
	import BuilderContent from '$lib/builder/builderContent.svelte';

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
	<BuilderContent content={data.content} />
</div>

<style lang="scss">
	@use '../src/style/_variables.scss';
	.heroWrapper {
		background: variables.$main-extra-dark;
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
		background: variables.$main-extra-dark;
		color: variables.$text-light;
	}
</style>
