<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { clickOutside } from './clickOutside';

	$: path = $page.url.pathname;
	let menuOpen = false;
	const links = [
		{ name: 'Etusivu', path: '/' },
		{ name: 'Lippukunta', path: '/lippukunta' },
		{ name: 'Yhteystiedot', path: '/johtajille' },
		{ name: 'Johtajille', path: '/yhteystiedot' }
	];

	function handleClickOutside(event) {
		menuOpen = false;
	}
</script>

<nav>
	<div class="name" on:click={() => goto('/')} on:keypress={() => goto('/')}>
		<a href="{base}/">Helsingin Erä&#8209;Leijonat</a>
	</div>
	<div class="links">
		{#each links as link}
			<div
				class:active={path === link.path}
				class="link"
				on:click={() => goto(link.path)}
				on:keypress={() => goto(link.path)}
			>
				<a class="linkText" href="{base}{link.path}">{link.name}</a>
			</div>
		{/each}
	</div>
	<div class="menu" use:clickOutside on:click_outside={handleClickOutside}>
		<button
			class="menuButton"
			on:click={() => {
				menuOpen = !menuOpen;
			}}
			on:keypress={() => {
				menuOpen = !menuOpen;
			}}
		>
			<img
				width="32px"
				class="menuIcon"
				src={menuOpen ? '../icons/menu_open.svg' : '../icons/menu.svg'}
				alt={menuOpen ? 'Close menu' : 'Open menu'}
			/>
		</button>

		<div class="menuDrawer" class:hidden={!menuOpen}>
			{#each links as link}
				<div
					class="menuLink"
					on:click={() => {
						menuOpen = false;
						goto(link.path);
					}}
					on:keypress={() => {
						menuOpen = false;
						goto(link.path);
					}}
				>
					<a class="linkText" href="{base}{link.path}">{link.name}</a>
				</div>
			{/each}
		</div>
	</div>
</nav>

<style lang="scss">
	@use '../src/style/_variables.scss';

	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: variables.$header-offset;
		z-index: 100;
		display: flex;
		align-items: stretch;
		justify-content: space-between;
		gap: 32px;
		background-color: variables.$green-light;
		box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);

		@media (min-width: variables.$xl) {
			padding: 0 80px;
		}
	}
	.links {
		display: none;

		@media (min-width: variables.$md) {
			display: flex;
		}
	}
	.menu {
		position: relative;
		display: flex;
		align-items: center;
		border-image-width: 0px;
		@media (min-width: variables.$md) {
			display: none;
		}
	}
	.menuButton {
		border: 0;
		background: none;
		box-shadow: none;
		border-radius: 0px;
		padding: 20px;
		&:hover {
			background-color: lighten(variables.$green-light, 3%);
			border-style: none;
		}
		&:active {
			border-style: none;
		}
	}
	.menuIcon {
		fill: variables.$text-light;
	}

	.menuDrawer {
		display: flex;
		flex-direction: column;
		position: fixed;
		top: variables.$header-offset;
		right: 0;
		width: 100%;
		padding: 16px 0 0 0;
		z-index: 50;
		background-color: darken(variables.$green-light, 2%);
		box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
	}
	.hidden {
		display: none;
	}
	.menuLink {
		padding: 16px 32px;
		cursor: pointer;
		&:hover {
			background-color: lighten(variables.$green-light, 3%);
		}
	}
	.link {
		display: flex;
		align-items: center;
		padding: 0 24px;
		cursor: pointer;

		@media (min-width: variables.$lg) {
			padding: 0 32px;
		}

		&:hover {
			background-color: lighten(variables.$green-light, 3%);
		}
	}
	.active {
		background-color: lighten(variables.$green-light, 2%);
		a {
			color: #fff !important;
		}
	}

	.linkText {
		color: variables.$text-light;
		font-size: large;
		font-family: variables.$font-primary;
		text-decoration: none;
		transition: color 0.2s;

		&:hover {
			color: #fff;
		}
	}

	.name {
		display: flex;
		align-items: center;
		padding: 16px 32px;
		cursor: pointer;

		&:hover {
			a {
				color: #fff;
			}
		}

		a {
			color: #eee;
			font-size: 22px;
			text-decoration: none;
			transition: color 0.2s;

			@media (min-width: variables.$lg) {
				font-size: 26px;
			}
		}
	}
</style>
