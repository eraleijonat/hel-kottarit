<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	export let title: string | undefined;
	export let description: string | undefined;
	export let image: string | undefined;

	const pageName = 'Helsingin Erä-Leijonat';
	const computedTitle = title && title !== pageName ? `${title} | ${pageName}` : pageName;
	const computedImage = image || `${base}/logo/hel-logo.png`;
	const computedDescription =
		description ||
		'Helsingin Erä-Leijonat on vuonna 1993 perustettu Pukinmäkiläinen partiolippukunta';
</script>

<svelte:head>
	<!-- favicon -->
	<link rel="icon" type="image/svg+xml" href={`${base}/favicon-dark.svg`} media="(prefers-color-scheme: dark)" />
	<link rel="icon" type="image/svg+xml" href={`${base}/favicon-light.svg`} media="(prefers-color-scheme: light)" />
	<link rel="icon" type="image/png" href={`${base}/favicon.png`} />
	<link rel="icon" type="image/png" href={`${base}/favicon.ico`} />

	<!-- HTML Meta Tags -->
	<title>{computedTitle}</title>
	<meta name="description" content={computedDescription} />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={$page.url.pathname} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={computedTitle} />
	<meta property="og:description" content={computedDescription} />
	<meta property="og:image" content={computedImage} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="eraleijonat.fi" />
	<meta property="twitter:url" content={$page.url.pathname} />
	<meta name="twitter:title" content={computedTitle} />
	<meta name="twitter:description" content={computedDescription} />
	<meta name="twitter:image" content={computedImage} />
</svelte:head>
