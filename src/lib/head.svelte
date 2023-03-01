<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	export let title = 'Helsingin Erä-Leijonat';
	export let image = `${base}/logo/hel-logo.png`;
	export let description =
		'Helsingin Erä-Leijonat on vuonna 1993 perustettu Pukinmäkiläinen partiolippukunta';
</script>

<svelte:head>
	<!-- favicon -->
	<link rel="icon" type="image/svg+xml" href={`${base}/favicon.svg`} />
	<link rel="icon" type="image/png" href={`${base}/favicon.png`} />
	<!-- HTML Meta Tags -->
	<title>Helsingin Erä-Leijonat</title>
	<meta name="description" content={description} />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={$page.url.pathname} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="eraleijonat.fi" />
	<meta property="twitter:url" content={$page.url.pathname} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
</svelte:head>
