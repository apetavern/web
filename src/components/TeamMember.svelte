<script context="module" lang="ts">
	export interface TeamMemberProps {
		name: string;
		position: string;
		twitter?: string;
		website?: string;
		avatarPath: string;
	}
</script>

<script lang="ts">
	import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
	import { faLink } from '@fortawesome/free-solid-svg-icons';

	import Fa from 'svelte-fa';

	export let name: string;
	export let position: string;
	export let twitter: string | undefined;
	export let website: string | undefined;
	export let avatarPath: string;
</script>

<li class="flex shrink items-center justify-start w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 h-min">
	<div class="flex aspect-square">
		<img src={avatarPath} class="w-20 rounded-full aspect-square" alt={'avatar ' + name} />
	</div>

	<div class="flex flex-col justify-start pl-4 h-full flex-nowrap">
		<div class="flex flex-col">
			<p class="text-2xl font-bold">{name}</p>
			<p class="text-s">{position}</p>
		</div>

		<div class="h-6 my-1 flex justify-start shrink">
			{#if twitter}
				<a
					class="text-white bg-blue-500 rounded px-1 py-1 mr-1 hover:bg-blue-400 transition-all"
					href={twitter}
				>
					<Fa icon={faXTwitter} />
				</a>
			{/if}

			{#if website}
				<a
					class="text-white bg-blue-500 rounded px-1 py-1 hover:bg-blue-400 transition-all"
					href={website}
				>
					<Fa icon={faLink} />
				</a>
			{/if}
		</div>
	</div>
</li>
