<script lang="ts">
	import type { HeroPageData } from '$lib/builder/types';
	import HeroPage from '$lib/heroPage.svelte';
	export let data: HeroPageData;
</script>

<HeroPage {data} />
