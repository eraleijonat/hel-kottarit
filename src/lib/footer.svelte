<script>
	import { base } from '$app/paths';
</script>

<footer>
	<div class="logos">
		<img src="{base}/sp.png" alt="suomen partiolaiset" />
		<img src="{base}/wagggs.png" alt="suomen partiolaiset" />
		<img src="{base}/wosm.png" alt="suomen partiolaiset" />
	</div>
	<p>Helsingin Erä-Leijonat ry (1084910-4)</p>
</footer>

<style lang="scss">
	footer {
		width: 100%;
		bottom: 0;
		min-height: 160px;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		gap: 32px;
		background-color: #082e2a;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
	}
	.logos {
		display: flex;
		gap: 32px;
	}
	img {
		height: 50px;
	}
	p {
		color: #fff;
	}
</style>
