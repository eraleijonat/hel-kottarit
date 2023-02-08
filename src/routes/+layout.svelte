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
	@use '../src/style/_variables.scss';

	body {
		font-family: 'Poppins', sans-serif;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}
	main {
		margin-top: variables.$header-offset;
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}
</style>
