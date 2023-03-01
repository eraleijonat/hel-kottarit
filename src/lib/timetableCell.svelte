<script lang="ts">
	import { columns, rows, ageGroups } from './timetable';
	export let day: string | undefined;
	export let start: string | undefined;
	export let end: string | undefined;
	export let text: string;
	export let ageGroup: string | undefined;

	const dayColumn = day !== undefined && columns.indexOf(day) + 2;
	const startRow = start && rows.indexOf(start) + 2;
	const endRow = end && rows.indexOf(end) + 3;
	const ageGroupData = ageGroups.find((a) => a.name === ageGroup);
	const defaultAgeGroupData = {
		colors: '#8f95a6',
		ages: '-',
		name: 'Muu toiminta'
	};
	console.log(ageGroup);
</script>

{#if dayColumn > 0 && startRow && endRow}
	<div
		class="cell"
		style={`grid-column: ${dayColumn}; grid-row: ${startRow} / ${endRow}; background-color: ${
			ageGroupData !== undefined ? ageGroupData.colors : defaultAgeGroupData.colors
		};`}
	>
		<p class="cellText">{text}</p>
	</div>
{/if}

<style lang="scss">
	.cell {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 8px;
		border-radius: 4px;
		text-align: center;
	}

	.cellText {
		margin: 0px;
	}
</style>
