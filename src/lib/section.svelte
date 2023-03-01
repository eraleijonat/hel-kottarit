<script lang="ts">
	export let variant: 'light' | 'dark' | 'transparent';
	export let width: 'narrow' | 'wide' | 'full';
</script>

<section
	class="section"
	class:sectionLight={variant === 'light'}
	class:sectionDark={variant === 'dark'}
>
	<div class="gutter" class:gutterWide={width == 'wide'} class:gutterNarrow={width == 'narrow'}>
		<slot />
	</div>
</section>

<style lang="scss">
	@use '../src/style/_variables.scss';

	.gutter {
		padding: 64px 20px;
	}
	.gutterNarrow {
		@media (min-width: variables.$md) {
			max-width: variables.$md;
		}
	}
	.gutterWide {
		@media (min-width: variables.$md) {
			max-width: 90%;
		}
		@media (min-width: variables.$lg) {
			max-width: variables.$lg;
		}
	}
	.section {
		display: flex;
		justify-content: center;
		max-width: 100%;
	}
	.sectionLight {
		background-color: variables.$main-light;
		color: variables.$text-dark;
	}
	.sectionDark {
		background-color: variables.$main-dark;
		color: variables.$text-light;
	}
</style>
