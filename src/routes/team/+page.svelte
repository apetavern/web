<script lang="ts">
	import type { TeamMemberProps } from '../../components/TeamMember.svelte';
	import TeamMember from '../../components/TeamMember.svelte';

	let teamMembers: TeamMemberProps[] = [
		{
			name: 'Trundler',
			position: 'Programmer & Founder',
			website: 'https://trundler.xyz',
			twitter: 'https://twitter.com/trundler_',
			avatarPath: 'images/team/trundler.png'
		},
		{
			name: 'Matt944',
			position: 'Programmer',
			website: 'https://www.ninetyfour.dev',
			twitter: 'https://twitter.com/Matt944_',
			avatarPath: 'images/team/matt944.png'
		},
		{
			name: 'ShadowBrain',
			position: 'Programmer & 3D Artist',
			twitter: 'https://twitter.com/TheShadowBrain',
			website: 'https://shadowbrain.itch.io',
			avatarPath: 'images/team/shadowbrain.png'
		},
		{
			name: 'PUKES',
			position: '3D Artist',
			twitter: 'https://twitter.com/ImPukes',
			avatarPath: 'images/team/pukes.png'
		},
		{
			name: 'Jammie',
			position: '3D Artist',
			twitter: 'https://twitter.com/Jammie3D',
			website: 'https://www.artstation.com/jammie3d',
			avatarPath: 'images/team/jammie.png'
		},
		{
			name: 'Gooman',
			position: 'Programmer',
			twitter: 'https://twitter.com/peter_rgg',
			website: 'https://peter-r-g.github.io',
			avatarPath: 'images/team/gooman.png'
		},
		{
			name: 'Damien',
			position: 'Programmer & 2D Artist',
			website: 'https://damien.stamates.io',
			avatarPath: 'images/team/damien.png'
		},
		{
			name: 'Kidd',
			position: 'Programmer',
			website: 'https://drewbritt.dev/',
			twitter: 'https://twitter.com/drewbritt_',
			avatarPath: 'images/team/kidd.jpg'
		},
		{
			name: 'Carson',
			position: 'Programmer & Game Designer',
			website: 'https://carsonk.net/',
			twitter: 'https://twitter.com/CarsonKompon',
			avatarPath: 'images/team/carson.jpg'
		},
		{
			name: 'Cameron',
			position: 'Programmer',
			website: 'https://github.com/cs716',
			avatarPath: 'images/team/cameron.png'
		},
	];
</script>

<div class="container p-8 mx-auto flex flex-col min-h-[90vh] justify-around">
	<div class="pt-24">
		<h1 class="font-bold text-4xl pb-8">Meet the Apes</h1>
		<ul class="flex flex-wrap items-center -m-4 justify-items-stretch">
			{#each teamMembers as teamMember}
				<TeamMember
					name={teamMember.name}
					position={teamMember.position}
					twitter={teamMember.twitter}
					website={teamMember.website}
					avatarPath={teamMember.avatarPath}
				/>
			{/each}
		</ul>
	</div>

	<div class="lg:px-20 xl:px-80 text-center mt-12 xl:mt-0">
		<h1 class="font-bold text-2xl">Want to join us?</h1>
		<p class="mt-4 text-lg">
			Our projects are <a
				class="text-blue-500 hover:text-blue-400 transition-all"
				href="https://github.com/apetavern">open source</a
			>, and we accept both issues and pull requests. Feel like going a step further? We're
			constantly looking for new talent for our team. Check out our
			<a
				class="text-blue-500 hover:text-blue-400 transition-all"
				href="https://discord.gg/g4JczwdCcN">Discord</a
			> to apply.
		</p>
	</div>
</div>
