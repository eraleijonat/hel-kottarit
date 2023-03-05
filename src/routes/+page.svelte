<script lang="ts">
	import Head from '../lib/head.svelte';
	import BuilderContent from '$lib/builder/builderContent.svelte';
	import type { HeroPageData } from '$lib/builder/types';
	import HeroPage from '$lib/heroPage.svelte';

	export let data: HeroPageData;
	let heroHeight: number | undefined;
</script>

<HeroPage {data} />
