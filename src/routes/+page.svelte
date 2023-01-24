<script lang="ts">
	import { RenderContent } from '@builder.io/sdk-svelte';
	import { BUILDER_PUBLIC_API_KEY } from '../lib/builderKey';

	export let data;
</script>

<div class="hero" style={`background-image: url(${data.content.data.heroImage});`}>
	<h1 class="heroTitle">{data.content.data.heroTitle}</h1>
	<p class="heroText">{data.content.data.heroText}</p>
</div>
<div class="content">
	<RenderContent model="page" content={data.content} apiKey={BUILDER_PUBLIC_API_KEY} />
</div>

<style lang="scss">
	.hero {
		height: 500px;
		background-image: url(data.content.data.heroImage);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.heroTitle {
		font-size: 54px;
		color: #fff;
		font-weight: 600;
		text-shadow: 2px 2px 4px #000;
	}
	.heroText {
		padding: 12px 32px;
		background-color: rgba(0, 0, 0, 0.4);
		border-radius: 8px;
		font-size: 20px;
		color: #fff;
	}
	.content {
		padding: 32px 128px;
		align-self: center;

		@media (min-width: 1280px) {
			max-width: 60%;
		}
	}
</style>
