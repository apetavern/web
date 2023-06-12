<script>
	import Fa from 'svelte-fa';
	import { faStickyNote, faUsers } from '@fortawesome/free-solid-svg-icons';
</script>

<header class="z-50 top-0 left-0 right-0 bg-transparent absolute">
	<div class="container mx-auto px-4">
		<div class="relative flex items-center justify-between h-32">
			<div class="flex-1 flex items-center justify-between">
				<div class="flex-shrink-0 flex items-center">
					<a href="/" class="relative w-16 h-16">
						<img
							src="images/brand/apetavern_icon_rounded.png"
							alt="home"
							class="absolute w-full h-full object-cover"
						/>
					</a>
				</div>

				<nav class="space-x-4 flex">
					<a
						href="/team"
						class="text-ape-cream hover:bg-blue-200 hover:bg-opacity-25
						transition-all md:px-4 px-2 py-2 rounded-xl text-lg flex"
					>
						<i class="pr-2 pt-1"><Fa icon={faUsers} /></i>
						Team
					</a>
					<a
						href="/blog"
						class="text-ape-cream hover:bg-blue-200 hover:bg-opacity-25
						transition-all md:px-4 px-2 py-2 rounded-xl text-lg flex"
					>
						<i class="pr-2 pt-1"><Fa icon={faStickyNote} /></i>
						Blog
					</a>
				</nav>
			</div>
		</div>
	</div>
</header>
