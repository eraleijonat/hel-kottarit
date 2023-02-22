<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	export let href = '';
	export let text = '';
</script>

<div
	class="menuLink"
	on:click={() => {
		goto(`${base}${href}`);
	}}
	on:keypress={() => {
		goto(`${base}${href}`);
	}}
>
	<a class="linkText" href="{base}{href}">{text}</a>
</div>
