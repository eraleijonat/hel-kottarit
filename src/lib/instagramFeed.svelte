<script lang="ts">
	import { goto } from '$app/navigation';
	import { BUILDER_PUBLIC_API_KEY } from './renderContent';

	export async function load() {
		const res = await fetch(
			`https://cdn.builder.io/api/v1/instagram/media?apiKey=${BUILDER_PUBLIC_API_KEY}`
		);
		const data = await res.json();
		console.log('data', data);
		const posts = data.data;
		return { posts };
	}

	const postsPromise = load();
</script>

<div class="posts">
	{#await postsPromise}
		<p>...ladataan IG kuvia</p>
	{:then data}
		{#each data.posts as post}
			<div class="post">
				<img
					width="300px"
					class="pic"
					alt="instagram post"
					src={post.media_url}
					on:click={() => goto(post.permalink)}
					on:keypress={() => goto(post.permalink)}
				/>
				<p class="caption">{post.caption}</p>
			</div>
		{/each}
	{/await}
</div>

<style lang="scss">
	@use '../src/style/_variables.scss';

	.posts {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 32px;
		overflow: auto;
		scroll-snap-type: x mandatory;

		@media (min-width: variables.$lg) {
			gap: 24;
			flex-direction: row;
			align-items: flex-start;

			-webkit-mask-image: linear-gradient(
				to left,
				transparent,
				rgba(255, 255, 255, 0.5) 2%,
				#fff 4%
			);
		}
	}
	.post {
		display: none;
		flex-direction: column;
		align-items: stretch;
		padding: 8px;
		gap: 16px;
		scroll-snap-align: start;

		@media (min-width: variables.$md) {
			flex-direction: row;
		}

		@media (min-width: variables.$lg) {
			display: flex;
			flex-direction: column;
			&:last-child {
				padding-right: 40px;
			}
		}

		&:nth-child(-n + 6) {
			display: flex;
		}

		&:target,
		&:active {
			background-color: rgba(255, 255, 255, 0.05);
		}
	}
	.pic {
		width: 100%;
		cursor: pointer;

		@media (min-width: variables.$md) {
			width: 300px;
		}

		@media (min-width: variables.$lg) {
			height: 375px;
			width: auto;
		}
	}
	.caption {
		margin: 0;
		text-align: justify;
	}
</style>
