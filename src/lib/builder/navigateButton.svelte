<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import type { BuilderAttributes } from './types';

	export let attributes: BuilderAttributes;
	export let href = '';
	export let text = '';
</script>

<div
	{...attributes}
	class="navigateButton"
	on:click={() => {
		goto(`${base}${href}`);
	}}
	on:keypress={() => {
		goto(`${base}${href}`);
	}}
>
	<a class="linkText" href="{base}{href}">{text}</a>
</div>

<style lang="scss">
	@use '../src/style/_variables.scss';

	.navigateButton {
		border: 0;
		background: none;
		box-shadow: none;
		border-radius: 100px;
		padding: 16px 24px;
		background-color: variables.$main;
		transition: background-color 0.1s;
		cursor: pointer;

		&:hover {
			background-color: lighten(variables.$main, 2%);
			a {
				color: #fff;
			}
		}

		a {
			color: variables.$text-light;
			font-size: large;
			font-weight: 500;
			font-family: variables.$font-primary;
			text-decoration: none;
			transition: color 0.1s;
		}
	}
</style>
