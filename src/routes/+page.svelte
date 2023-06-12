<script>
	import { onMount } from 'svelte';
	import Socials from '../components/Socials.svelte';
	import { ParallaxBackground } from '../scripts/parallax-background';
	import Games from '../components/Games.svelte';
	import Description from '../components/Description.svelte';

	onMount(() => {
		new ParallaxBackground('#hero-background');
	});
</script>

<div class="flex flex-row py-16 min-h-screen backdrop-blur relative overflow-hidden">
	<div
		id="hero-background"
		class="opacity-50 absolute inset-0 scale-110 bg-[url('/images/brand/background.png')] blur-md -z-10 object-cover object-center
			bg-cover overflow-hidden"
	/>

	<div class="flex mx-auto gap-12">
		<div class="flex flex-col mx-auto md:p-8 justify-center min-h-full">
			<section class="container p-8 pb-4 -mt-12">
				<img
					src="images/brand/apetavern_logo_transparent_cream.png"
					class="-mx-4 md:max-w-xl"
					alt="logo"
				/>
				<p class="text-xl sm:text-2xl py-2 pb-4 text-ape-cream">
					Crafting immersive adventures for the world of <span class="text-ape-orange">s&box</span>.
				</p>
			</section>

			<section class="container mx-auto px-4">
				<Socials />
			</section>
		</div>
		<img
			src="images/brand/grub_think.png"
			class="hidden md:flex my-auto max-h-[24rem]"
			alt="grub"
		/>
	</div>
</div>

<div class="bg-slate-800 shadow-xl w-full h-8" />

<main class="min-h-screen">
	<Description />
	<!-- <Games /> -->
</main>
