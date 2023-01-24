<script lang="ts">
	import Footer from '../lib/footer.svelte';
	import Header from '../lib/header.svelte';
</script>

<body>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</body>

<style lang="scss">
	body {
		font-family: 'Poppins', sans-serif;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}
</style>
