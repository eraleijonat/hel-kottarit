<script lang="ts">
	import { columns, rows, ageGroups } from './timetable';
	import type { BuilderAttributes } from './types';

	export let attributes: BuilderAttributes;
	export let day: string | undefined;
	export let start: string | undefined;
	export let end: string | undefined;
	export let text: string;
	export let ageGroup: string | undefined;
	export let split: string | undefined;

	const column =
		day !== undefined && columns.indexOf(day) > -1 ? columns.indexOf(day) * 2 + 2 : undefined;
	const startOffset = split === 'right' ? 1 : 0;
	const endOffset = split === 'left' ? 1 : 2;
	const startRow = start && rows.indexOf(start) > -1 ? rows.indexOf(start) + 2 : undefined;
	const endRow = end && rows.indexOf(end) > -1 ? rows.indexOf(end) + 3 : undefined;
	const ageGroupData = ageGroups.find((a) => a.name === ageGroup);
	const defaultAgeGroupData = {
		colors: '#8f95a6',
		ages: '-',
		name: 'Muu toiminta'
	};
</script>

{#if column !== undefined && startRow !== undefined && endRow !== undefined}
	<div
		{...attributes}
		class="cell"
		style={`
		grid-column: ${column + startOffset} / ${column + endOffset};
		grid-row: ${startRow} / ${endRow};
		background-color: ${ageGroupData !== undefined ? ageGroupData.colors : defaultAgeGroupData.colors}`}
	>
		<p class="cellText">{text}</p>
	</div>
{/if}

<style lang="scss">
	@use '../src/style/_variables.scss';

	.cell {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 4px;
		text-align: center;
	}
	.cellText {
		color: variables.$text-light;
		padding: 12px 8px;
		margin: 0px;
	}
</style>
