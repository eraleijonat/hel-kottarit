<script lang="ts">
	import type { BuilderAttributes } from './types';

	export let attributes: BuilderAttributes;
	const calendarBackground = 'e3e9ff'; // background color without the #

	let width: number;

	$: height = Math.max(Math.min(width / 1.5, 500), 300);
</script>

<div {...attributes} class="calendarWrapper">
	<iframe
		bind:clientWidth={width}
		title="Helsingin Erä-Leijonat - Kalenteri"
		src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23{calendarBackground}&ctz=Europe%2FHelsinki&src=dWY2aDVmcW5zYWYyZm5yczZ0cnM0OTA2cmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%233F51B5"
		width="100%"
		{height}
		frameborder="0"
		scrolling="no"
	/>
</div>

<style lang="scss">
	@use '../src/style/_variables.scss';
	.calendarWrapper {
		display: flex;
		background-color: #e3e9ff;
		border-radius: 8px;
		padding: 16px 12px;
	}
</style>
