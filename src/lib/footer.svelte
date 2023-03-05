<script>
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { pageLinks } from './logic';
</script>

<footer>
	<div class="links">
		{#each pageLinks as link}
			<a class="linkText" href="{base}{link.path}">{link.name}</a>
		{/each}
	</div>
	<div class="organisationRow">
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
	</div>
</footer>

<style lang="scss">
	@use '../src/style/_variables.scss';

	footer {
		left: 0px;
		right: 0px;
		bottom: 0;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: space-between;
		gap: 42px;
		padding: 48px 18px 24px;
		background-color: variables.$main-dark;

		box-shadow: inset 0 10px 15px -5px rgba(0, 0, 0, 0.5);

		@media (min-width: variables.$md) {
			justify-content: space-evenly;
			padding: 48px 0 24px;
			gap: 54px;
		}
	}
	.organisationRow {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 32px;

		@media (min-width: variables.$md) {
			flex-direction: row;
			gap: 72px;
		}
	}
	.links {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 8px;

		@media (min-width: variables.$md) {
			flex-direction: row;
			gap: 32px;
		}
		@media (min-width: variables.$lg) {
			gap: 48px;
		}
	}
	.linkText {
		color: variables.$text-light;
		text-align: center;
		text-decoration: none;
		padding: 8px 2px 4px;
		border-bottom: 1px solid transparent;

		&:hover {
			border-color: variables.$text-light;
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
