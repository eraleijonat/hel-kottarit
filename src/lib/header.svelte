<script lang="ts">
	import { page } from '$app/stores';

	$: path = $page.url.pathname;
</script>

<nav>
	<div>
		<a href="/" class="name">Helsingin Erä-Leijonat</a>
	</div>
	<div class="links">
		<a class:active={path === '/johtajille'} href="/johtajille">Johtajille</a>
		<a class:active={path === '/lippukunta'} href="/lippukunta">Lippukunta</a>
		<a class:active={path === '/yhteystiedot'} href="/yhteystiedot">Yhteystiedot</a>
	</div>
</nav>

<style lang="scss">
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px 128px 20px 128px;
		gap: 32px;
		background-color: #13736a;
		box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
	}
	.links {
		display: flex;

		a {
			padding: 8px 32px;
			border-width: 0;
			border-right-width: 1px;
			border-style: solid;
			border-right-color: #c4d4db;
			color: #c4d4db;
			font-size: large;
			font-family: 'Poppins', sans-serif;
			text-decoration: none;
		}
		:last-child {
			border-right-width: 0;
		}
		a:hover {
			color: #fff;
		}
		.active {
			color: #eee;
		}
	}

	.name {
		color: #eee;
		font-size: 26px;
		text-decoration: none;
	}
	.name:hover {
		color: #fff;
	}
</style>
