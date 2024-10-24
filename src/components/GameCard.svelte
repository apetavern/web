<script context="module" lang="ts">
	export interface GameCardProps {
		name: string;
		description: string;
		thumbPath: string;
		releaseDate: string;
		github?: string;
		assetParty: string;
	}
</script>

<script lang="ts">
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faBox } from '@fortawesome/free-solid-svg-icons';

	import Fa from 'svelte-fa';

	export let name: string;
	export let description: string;
	export let thumbPath: string;
	export let releaseDate: string;
	export let github: string | undefined;
	export let assetParty: string;
</script>

<div
	class="rounded border sm:h-64 w-4/5 lg:w-2/5 flex flex-col sm:flex-row bg-gray-900 border-gray-700"
>
	<img
		src={thumbPath}
		alt={name + ' thumbnail'}
		class="bg-cover bg-center transition-all transform object-cover sm:w-1/2 h-1/2 sm:h-auto rounded"
	/>
	<div class="p-4 w-full flex flex-col">
		<div>
			<h3 class="text-2xl xl:text-3xl font-bold py-2">{name}</h3>
			<p class="py-2">{releaseDate}</p>
			<p class="text-base">{description}</p>
		</div>
		<div class="mt-auto flex gap-3 text-2xl xl:text-3xl pt-4">
			<a href={assetParty} class="hover:text-blue-500 transition-all">
				<Fa icon={faBox} />
			</a>
			{#if github}
				<a href={github} class="hover:text-blue-500 transition-all">
					<Fa icon={faGithub} />
				</a>
			{/if}
		</div>
	</div>
</div>
