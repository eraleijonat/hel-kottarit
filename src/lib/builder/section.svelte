<script lang="ts">
	import type { BuilderAttributes } from './types';

	export let variant: 'light' | 'dark' | 'transparent';
	export let width: 'narrow' | 'wide' | 'full';
	export let attributes: BuilderAttributes;
</script>

<section
	{...attributes}
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

	.section {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		max-width: 100%;
		padding: 32px 20px 16px;
	}
	.sectionLight {
		background-color: variables.$secondary-extra-light;
		color: variables.$text-dark;
	}
	.sectionDark {
		background-color: variables.$main-dark;
		color: variables.$text-light;
	}
	.gutter {
		max-width: 100%;
		width: 100%;
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
</style>
