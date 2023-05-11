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
	export let name: string;
	export let description: string;
	export let thumbPath: string;
	export let releaseDate: string;
	export let github: string | undefined;
	export let assetParty: string;
</script>

<div class="bg-ape-forest rounded relative border overflow-hidden lg:w-1/4">
	<img
		src={thumbPath}
		alt={name + ' thumbnail'}
		class="bg-cover bg-center transition-all transform"
	/>
	<div class="p-6 w-full">
		<div class="flex flex-row gap-2 items-baseline">
			<p class="uppercase font-bold text-ape-cream text-xl">
				{name}
			</p>
			<p class="text-ape-orange">
				{releaseDate}
			</p>
		</div>
		<p class="font-light">
			{description}
		</p>
	</div>
</div>
