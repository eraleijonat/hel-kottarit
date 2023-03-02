<script lang="ts">
	import { columns, fullRows } from './timetable';
	import type { TimetableVariant } from './timetable';
	import type { BuilderProps } from './types';

	let attributes: BuilderProps;

	export let variant: TimetableVariant;
</script>

<div {...attributes} class="container">
	<div class="timeTable" class:timeTableDark={variant === 'dark'}>
		{#each columns as column, i}
			<div class="headerCell" style={`grid-column: ${i * 2 + 2} / ${i * 2 + 4}`}>
				<p>{column}</p>
			</div>
		{/each}
		{#each fullRows as row, i}
			<div class="headerCell" style={`grid-area: ${i + 2}/1`}>
				<p class="headerText">{row.text}</p>
			</div>
		{/each}
		<slot />
	</div>
</div>

<style lang="scss">
	@use '../src/style/_variables.scss';
	.container {
		display: flex;
		flex-direction: column;
		overflow-x: auto;
	}
	.timeTable {
		display: grid;
		grid-template-columns: auto repeat(10, 1fr);
		grid-template-rows: auto repeat(7, 1fr);
		row-gap: 8px;
		column-gap: 8px;
		border-width: 1px;
		border-radius: 4px;
		border-style: solid;
		min-width: 730px;
		padding: 16px;
		border-color: variables.$text-dark;
		color: variables.$text-dark;
	}
	.timeTableDark {
		border-color: variables.$text-light;
		color: variables.$text-light;
	}

	.headerCell {
		font-weight: bold;
		padding: 8px 16px;
		text-align: center;
	}

	.headerText {
		margin: 0px;
	}
</style>
