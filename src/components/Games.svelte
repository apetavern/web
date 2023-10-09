<script lang="ts">
	import GameCard, { type GameCardProps } from './GameCard.svelte';

	let games: GameCardProps[] = [
		{
			name: 'Grubs',
			description: 'An artillery strategy game, inspired by the Worms series.',
			thumbPath: 'https://files.facepunch.com/sbox/asset/apetavern.grubs/logo.161b559.png',
			releaseDate: 'May 2023',
			github: 'https://github.com/apetavern/sbox-grubs',
			assetParty: 'https://asset.party/apetavern/grubs'
		},
		{
			name: 'Parkour Painters',
			description: 'A parkour and graffiti team-based game created for a game jam.',
			thumbPath:
				'https://files.facepunch.com/sbox/asset/apetavern.parkour_painters/logo.2e579cd1.png',
			releaseDate: 'April 2023',
			github: 'https://github.com/apetavern/parkour-painters',
			assetParty: 'https://asset.party/apetavern/parkour_painters'
		}
		// {
		// 	name: '',
		// 	description: '',
		// 	thumbPath: '',
		// 	releaseDate: '',
		// 	github: '',
		// 	assetParty: ''
		// }
	];
</script>

<section class="relative overflow-hidden bg-slate-800 pb-16">
	<div class="container m-auto py-16 flex justify-center">
		<h2 class="text-3xl uppercase font-bold">Our Games</h2>
	</div>
	<div class="flex flex-col flex-wrap items-center justify-center gap-8 lg:flex-row">
		{#each games as game}
			<GameCard
				name={game.name}
				description={game.description}
				thumbPath={game.thumbPath}
				releaseDate={game.releaseDate}
				github={game.github}
				assetParty={game.assetParty}
			/>
		{/each}
	</div>
</section>

<!-- <section class="relative overflow-hidden pt-4 pb-16">
	<div class="container m-auto h-full flex flex-col items-center justify-center px-4 xl:px-0">
		<div class="container m-auto h-full flex flex-col items-center justify-center px-4 xl:px-0">
			<h2 class="font-bold text-3xl text-center uppercase py-8 mb-12 text-ape-cream">Our games</h2>
		</div>

		<div class="flex flex-col w-full justify-center items-center lg:gap-8 lg:flex-row">
			{#each games as game}
				<GameCard
					name={game.name}
					description={game.description}
					thumbPath={game.thumbPath}
					releaseDate={game.releaseDate}
					github={game.github}
					assetParty={game.assetParty}
				/>
			{/each}
		</div>
	</div>
</section> -->
