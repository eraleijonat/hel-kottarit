<script lang="ts">
	import { columns, rows } from './timetable';
</script>

<div class="timeTable">
	{#each columns as column, i}
		<div class="headerCell" style={`grid-area: 1/${i + 2}`}>
			<p>{column}</p>
		</div>
	{/each}
	{#each rows as row, i}
		<div class="headerCell" style={`grid-area: ${i + 2}/1`}>
			<p class="headerText">{row}</p>
		</div>
	{/each}
</div>

<style lang="scss">
	@use '../src/style/_variables.scss';
	.timeTable {
		display: grid;
		grid-template-columns: 2fr repeat(7, 1fr);
		grid-template-rows: auto;
		row-gap: 8px;
		column-gap: 8px;
		border-width: 1px;
		border-style: solid;
		border-color: variables.$text-light;
		color: variables.$text-light;
	}
	.headerCell {
		font-weight: bold;
		padding: 8px;
		text-align: center;
	}

	.headerText {
		margin: 0px;
	}
</style>
