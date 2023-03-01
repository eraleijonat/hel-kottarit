<script lang="ts">
	import { columns, rows } from './timetable';
</script>

<div class="container">
	<div class="timeTable">
		{#each columns as column, i}
			<div class="headerCell" style={`grid-column: ${i * 2 + 2} / ${i * 2 + 4}`}>
				<p>{column}</p>
			</div>
		{/each}
		{#each rows as row, i}
			<div class="headerCell" style={`grid-area: ${i + 2}/1`}>
				<p class="headerText">{row}</p>
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
		max-width: 100%;
		overflow-x: scroll;
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
		padding-bottom: 16px;
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
