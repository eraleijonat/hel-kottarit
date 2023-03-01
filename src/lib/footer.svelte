<script>
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
</script>

<footer>
	<div class="logos">
		<img
			class="sp"
			src="{base}/sp.png"
			alt="suomen partiolaiset"
			on:click={() => goto('https://www.partio.fi/')}
			on:keypress={() => goto('https://www.partio.fi/')}
		/>
		<img src="{base}/wagggs.png" alt="suomen partiolaiset" />
		<img src="{base}/wosm.png" alt="suomen partiolaiset" />
	</div>
	<p>Helsingin Erä-Leijonat ry (1084910-4)</p>
</footer>

<style lang="scss">
	@use '../src/style/_variables.scss';

	footer {
		left: 0px;
		right: 0px;
		bottom: 0;
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		justify-content: space-between;
		gap: 32px;
		padding: 32px;
		background-color: variables.$footer;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

		@media (min-width: variables.$md) {
			flex-direction: row;
			justify-content: space-evenly;
		}
	}
	.logos {
		display: flex;
		gap: 32px;
	}
	.sp {
		cursor: pointer;
	}
	img {
		height: 50px;
	}
	p {
		color: #fff;
	}
</style>
