<script lang="ts">
	import type { BuilderAttributes } from './types';

	export let attributes: BuilderAttributes;
</script>

<div {...attributes} class="calendar">
	<iframe
		title="Helsingin Erä-Leijonat - Kalenteri"
		src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23015938&ctz=Europe%2FHelsinki&src=dWY2aDVmcW5zYWYyZm5yczZ0cnM0OTA2cmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%233F51B5"
		width="100%"
		height="600"
		frameborder="0"
		scrolling="no"
	/>
</div>

<style lang="scss">
	@use '../src/style/_variables.scss';
	.calendar {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: variables.$main-dark;
	}
</style>
