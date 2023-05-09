<script>
	import { onMount } from 'svelte';
	import Socials from '../components/Socials.svelte';
	import { ParallaxBackground } from '../scripts/parallax-background';

	onMount(() => {
		new ParallaxBackground('#hero-background');
	});
</script>

<div
	class="flex flex-col py-16 items-start justify-center h-[calc(100vh-8rem)] backdrop-blur relative overflow-hidden"
>
	<div
		id="hero-background"
		class="opacity-50 absolute inset-0 scale-110 bg-[url('/images/brand/background.png')] blur-md -z-10 object-cover object-center
        bg-cover overflow-hidden"
	/>

	<section class="container mx-auto p-8 pb-4 -mt-12">
		<img
			src="images/brand/apetavern_logo_transparent_cream.png"
			class="-mx-4 md:max-w-xl"
			alt="logo"
		/>
		<p class="font-semibold text-xl sm:text-2xl text-white py-2 pb-4">
			We're a small team of developers who love making games.
		</p>
	</section>

	<section class="container mx-auto px-4">
		<Socials />
	</section>
</div>

<div class="bg-gray-800 shadow-xl w-full h-8" />

<main class="min-h-screen">
	<section
		class="container m-auto flex flex-col lg:flex-row w-full py-64 px-4 xl:px-0 items-center"
	>
		<img
			src="/images/brand/banner_01.jpg"
			class="lg:w-1/2 aspect-video object-cover grow rounded-md"
			alt="grubs banner"
		/>

		<div class="lg:w-1/2 lg:ml-4 shrink flex items-start justify-center flex-col pl-4">
			<h2 class="font-bold font-subtitle text-2xl py-4">
				We make the best games for <span class="text-blue-500">s&amp;box</span>.
			</h2>
			<p>
				We are a small team of developers who follow our passions. We create fun games, and have fun
				while making them.
			</p>
		</div>
	</section>
</main>
