<script lang="ts">
	import type { HeroPageContent } from '$lib/builder/types';
	import HeroPage from '$lib/heroPage.svelte';

	export let data: { content: HeroPageContent };
</script>

<HeroPage content={data.content} />
