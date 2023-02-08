<script lang="ts">
	import { RenderContent } from '@builder.io/sdk-svelte';
	import { BUILDER_PUBLIC_API_KEY } from '../../lib/builderKey';

	// this data comes from the function in `+page.server.js`, which runs on the server only
	export let data;
</script>

<main>
	<RenderContent model="page" content={data.content} apiKey={BUILDER_PUBLIC_API_KEY} />
</main>
