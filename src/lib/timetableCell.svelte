<script lang="ts">
	import { columns, rows } from './timetable';
	export let day: string | undefined;
	export let start: string | undefined;
	export let end: string | undefined;
	export let text: string;

	const dayColumn = day !== undefined && columns.indexOf(day) + 2;
	const startRow = start && rows.indexOf(start) + 2;
	const endRow = end && rows.indexOf(end) + 3;

	console.log({ day, start, end });
</script>

{#if dayColumn > 0 && startRow && endRow}
	<div class="cell" style={`grid-column: ${dayColumn}; grid-row: ${startRow} / ${endRow}`}>
		<p class="cellText">{text}</p>
	</div>
{/if}

<style lang="scss">
	.cell {
		padding: 8px;
	}

	.cellText {
		margin: 0px;
	}
</style>
