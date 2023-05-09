<script>
	import { faDiscord, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
	import { faBox } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
</script>

<ul class="list-none flex text-white text-2xl items-center">
	<li class="px-4">
		<a href="https://discord.gg/apetavern" title="Discord">
			<Fa class="cursor-pointer hover:text-blue-500 transition-all" icon={faDiscord} />
		</a>
	</li>

	<li class="px-4">
		<a href="https://twitter.com/apetavern" title="Twitter">
			<Fa class="cursor-pointer hover:text-blue-500 transition-all" icon={faTwitter} />
		</a>
	</li>

	<li class="px-4">
		<a href="https://github.com/apetavern" title="GitHub">
			<Fa class="cursor-pointer hover:text-blue-500 transition-all" icon={faGithub} />
		</a>
	</li>

	<li class="px-4">
		<a href="https://asset.party/apetavern" title="s&box">
			<Fa class="cursor-pointer hover:text-blue-500 transition-all" icon={faBox} />
		</a>
	</li>
</ul>
