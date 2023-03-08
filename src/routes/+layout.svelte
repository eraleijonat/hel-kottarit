<script lang="ts">
	import Footer from '../lib/footer.svelte';
	import TopNav from '../lib/topNav.svelte';
</script>

<body>
	<TopNav />
	<main>
		<slot />
	</main>
	<Footer />
</body>

<style lang="scss">
	@use '../src/style/reset.scss';
	@use '../src/style/_variables.scss';
	:global(h1, h2, h3, h4, h5, h6) {
		font-family: variables.$font-primary-header;
		font-weight: normal;
	}
	:global(h1) {
		font-size: variables.$font-size-2;
		margin: 24px;
		hyphens: none;

		@media (min-width: variables.$sm) {
			font-size: variables.$font-size-1;
			margin: 28px;
		}
		@media (min-width: variables.$md) {
			font-size: variables.$font-size-0;
			margin: 36px;
		}
		@media (min-width: variables.$lg) {
			font-size: 64px;
			margin: 52px 0;
		}
	}
	:global(h2) {
		font-size: variables.$font-size-3;
		margin: 18px 0;
		hyphens: none;

		@media (min-width: variables.$md) {
			font-size: variables.$font-size-2;
			margin: 24px 0;
		}
		@media (min-width: variables.$lg) {
			font-size: variables.$font-size-1;
			margin: 32px 0;
		}
	}
	:global(h3) {
		font-size: variables.$font-size-3;
		hyphens: none;

		@media (min-width: variables.$md) {
			font-size: variables.$font-size-2;
		}
	}
	:global(h4) {
		font-size: variables.$font-size-3;
	}
	:global(h5) {
		font-size: variables.$font-size-4;
	}
	:global(h6) {
		font-size: variables.$font-size-5;
	}

	body {
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		font-family: variables.$font-primary;
		font-size: 18px;

		hyphens: auto;
	}
	main {
		margin-top: variables.$header-offset;
		margin-bottom: 100px;
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		max-width: 100%;
	}
</style>
