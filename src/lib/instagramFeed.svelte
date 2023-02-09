<script lang="ts">
	import { goto } from '$app/navigation';
	import { BUILDER_PUBLIC_API_KEY } from './builderKey';

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
			<div
				class="post"
				on:click={() => goto(post.permalink)}
				on:keypress={() => goto(post.permalink)}
			>
				<img width="300px" class="pic" alt="instagram post" src={post.media_url} />
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

		@media (min-width: variables.$lg) {
			gap: 24;
			flex-direction: row;
			align-items: flex-start;
		}
	}
	.post {
		display: none;
		flex-direction: column;
		align-items: stretch;
		padding: 8px;
		gap: 16px;
		@media (min-width: variables.$md) {
			flex-direction: row;
		}

		@media (min-width: variables.$lg) {
			display: flex;
			flex-direction: column;
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
