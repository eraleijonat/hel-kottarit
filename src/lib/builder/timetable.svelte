<script lang="ts">
	import { columns, fullRows } from './timetable';
	import type { TimetableVariant } from './timetable';
	import type { BuilderAttributes } from './types';

	export let attributes: BuilderAttributes;
	export let variant: TimetableVariant;
</script>

<div {...attributes} class="container">
	<div
		class="timeTable"
		style={`grid-template-columns: auto repeat(${columns.length * 2}, 1fr);
		grid-template-rows: auto repeat(${fullRows.length}, 1fr);`}
		class:timeTableDark={variant === 'dark'}
	>
		<div class="headerCell" />
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
	.backgroundCell {
		border-width: 1px;
		border-color: gray;
		border-style: solid;
	}
	.headerCell {
		font-weight: bold;
		padding: 0 16px;
		text-align: center;
		vertical-align: text-top;
	}
	.headerText {
		margin: 0px;
	}
</style>
