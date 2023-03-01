<script lang="ts">
	import { columns, rows } from './timetable';
	export let day: string | undefined;
	export let start: string | undefined;
	export let end: string | undefined;
	export let text: string;

	const dayToColumn = () => day !== undefined && columns.indexOf(day) + 1;
	const timeToRow = (t: string | undefined) => t !== undefined && rows.indexOf(t) + 1;

	console.log({ day, start, end });
</script>

{#if dayToColumn() > 0 && timeToRow(start) !== undefined && timeToRow(end)}
	<div
		class="cell"
		style={`grid-column: ${dayToColumn()}; grid-row: ${timeToRow(start)} / ${timeToRow(end)}`}
	>
		<p>{text}</p>
	</div>
{/if}

<style lang="scss">
	.cell {
		padding: 8px;
	}
</style>
