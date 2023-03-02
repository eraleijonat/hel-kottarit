<script lang="ts">
	import InstagramFeed from '$lib/builder/instagramFeed.svelte';
	import NavigateButton from '$lib/builder/navigateButton.svelte';
	import { RenderContent } from '@builder.io/sdk-svelte';
	import { BUILDER_PUBLIC_API_KEY } from './renderContent';
	import Section from '$lib/builder/section.svelte';
	import Timetable from '$lib/builder/timetable.svelte';
	import TimetableCell from '$lib/builder/timetableCell.svelte';
	import { ageGroups, columns, rows, splitValues, timetableVariant } from '$lib/builder/timetable';

	export let content;
</script>

<RenderContent
	model="page"
	{content}
	apiKey={BUILDER_PUBLIC_API_KEY}
	customComponents={[
		{
			component: NavigateButton,
			name: 'Navigate button',
			canHaveChildren: false,
			builtIn: true,
			inputs: [
				{
					name: 'href',
					type: 'string',
					defaultValue: ''
				},
				{
					name: 'text',
					type: 'string',
					defaultValue: ''
				}
			],
			noWrap: true
		},
		{
			component: InstagramFeed,
			name: 'Instagram feed',
			canHaveChildren: false,
			noWrap: true,
			builtIn: true
		},
		{
			component: Timetable,
			name: 'Timetable',
			canHaveChildren: true,
			builtIn: true,
			inputs: [
				{
					name: 'variant',
					type: 'string',
					enum: timetableVariant,
					defaultValue: timetableVariant[0]
				}
			],
			noWrap: true
		},
		{
			component: TimetableCell,
			name: 'Timetable cell',
			canHaveChildren: false,
			builtIn: true,
			inputs: [
				{ name: 'day', type: 'string', enum: columns },
				{ name: 'start', type: 'string', enum: rows },
				{ name: 'end', type: 'string', enum: rows },
				{ name: 'text', type: 'string' },
				{ name: 'ageGroup', type: 'string', enum: ageGroups.map((a) => a.name) },
				{ name: 'split', type: 'string', enum: splitValues }
			],
			noWrap: true
		},
		{
			component: Section,
			name: 'Section',
			canHaveChildren: true,
			builtIn: true,
			inputs: [
				{
					name: 'variant',
					type: 'string',
					enum: ['light', 'dark', 'transparent'],
					defaultValue: 'transparent'
				},
				{
					name: 'width',
					type: 'string',
					enum: ['narrow', 'wide', 'full'],
					defaultValue: 'narrow'
				}
			],
			noWrap: true
		}
	]}
/>
