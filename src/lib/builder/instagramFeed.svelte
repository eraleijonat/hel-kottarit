<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { BUILDER_PUBLIC_API_KEY } from './renderContent';
	import type { BuilderAttributes } from './types';

	export let attributes: BuilderAttributes;

	export async function load() {
		const res = await fetch(
			`https://cdn.builder.io/api/v1/instagram/media?apiKey=${BUILDER_PUBLIC_API_KEY}`
		);
		const data = await res.json();
		const posts = data.data;
		return { posts };
	}

	const postsPromise = load();

	const igLink = 'https://www.instagram.com/eraleijonat/';
</script>

<div {...attributes} class="container">
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

					<p class="caption">
						{post.caption.slice(0, 250) + '... '}<a
							href={post.permalink}
							target="_blank"
							rel="noreferrer">lue lisää</a
						>
					</p>
				</div>
			{/each}
		{/await}
	</div>
	<div class="instagramLink" on:click={() => goto(igLink)} on:keypress={() => goto(igLink)}>
		<img width="24px" height="24px" src={`${base}/instagram-logo.svg`} alt="Instagram logo" />
		<a href={igLink}>Seuraa meitä instagramissa</a>
	</div>
</div>

<style lang="scss">
	@use '../src/style/_variables.scss';
	.container {
		display: flex;
		flex-direction: column;
		max-width: 100%;
	}
	.posts {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
		padding-bottom: 8px;
		overflow-x: auto;
		scroll-snap-type: x mandatory;

		@media (min-width: variables.$lg) {
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
		gap: 16px;
		border-radius: 8px;
		scroll-snap-align: start;
		background-color: variables.$main-extra-light;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

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
	}
	.pic {
		width: 100%;
		cursor: pointer;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;

		@media (min-width: variables.$md) {
			width: 300px;
		}

		@media (min-width: variables.$lg) {
			width: 400px;
			height: 300px;
			object-fit: cover;
		}
	}
	.caption {
		margin: 0;
		padding: 16px;
		text-align: justify;
		text-overflow: ellipsis;
		font-size: variables.$font-size-6;
		color: variables.$text-dark;
		line-height: 1.5em;
	}
	.instagramLink {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-self: center;
		margin-top: 8px;
		padding: 4px;
		gap: 16px;
		cursor: pointer;

		@media (min-width: variables.$md) {
			flex-direction: row;
		}
	}
</style>
