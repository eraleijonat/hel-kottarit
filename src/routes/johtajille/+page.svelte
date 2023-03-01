<script lang="ts">
	import BuilderContent from '$lib/builder/builderContent.svelte';
	export let data;
</script>

<main>
	<BuilderContent content={data.content} />
</main>
