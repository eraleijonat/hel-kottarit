<script lang="ts">
	import { RenderContent } from '@builder.io/sdk-svelte';
	import { BUILDER_PUBLIC_API_KEY } from '../lib/builderKey';

	export let data;
</script>

<div class="heroWrapper">
	<div class="hero" style={`background-image: url(${data.content.data.heroImage});`}>
		<h1 class="heroTitle">{data.content.data.heroTitle}</h1>
		<p class="heroText">{data.content.data.heroText}</p>
	</div>
</div>
<div class="content">
	<div class="section">
		<RenderContent model="page" content={data.content} apiKey={BUILDER_PUBLIC_API_KEY} />
	</div>
</div>

<style lang="scss">
	@use '../src/style/_variables.scss';
	.heroWrapper {
		background: rgba(29, 29, 29, 1);
	}
	.hero {
		height: 400px;
		padding: 80px 20px 40px;

		background-size: cover;
		-webkit-mask-image: linear-gradient(
			to bottom,
			#fff 0px,
			#fff 85%,
			rgba(255, 255, 255, 0.2) 92%,
			transparent
		);

		background-position: 65%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		@media (min-width: variables.$sm) {
			height: 700px;
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
			rgba(29, 29, 29, 1) 0%,
			rgba(5, 28, 26, 1) 50%,
			rgba(29, 29, 29, 1) 100%
		);
	}

	.section {
		padding: 80px 20px;

		@media (min-width: variables.$sm) {
			padding: 80px 32px;
		}
		@media (min-width: variables.$xl) {
			max-width: 60%;
		}
	}
	* {
		color: variables.$text-light;
	}
</style>
