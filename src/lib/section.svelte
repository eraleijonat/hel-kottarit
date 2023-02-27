<script lang="ts">
	export let variant: 'light' | 'dark' | 'transparent' | undefined;
</script>

<section
	class="section"
	class:sectionLight={variant === 'light'}
	class:sectionDark={variant === 'dark'}
/>

<style lang="scss">
	@use '../src/style/_variables.scss';

	.section {
		padding: 80px 20px;
		max-width: 90%;

		@media (min-width: variables.$sm) {
			padding: 80px 32px;
		}
		@media (min-width: variables.$xl) {
			max-width: 80%;
		}
	}
	.sectionLight {
		background-color: variables.$main-light;
	}
	.sectionDark {
		background-color: variables.$main-dark;
	}
</style>
