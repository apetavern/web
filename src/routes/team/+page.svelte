<script lang="ts">
	import type { TeamMemberProps } from '../../components/TeamMember.svelte';
	import TeamMember from '../../components/TeamMember.svelte';

	let teamMembers: TeamMemberProps[] = [
		{
			name: 'Trundler',
			position: 'Programmer',
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
			name: 'Gio',
			position: 'Programmer',
			website: 'https://github.com/lotuspar',
			avatarPath: 'images/team/par.png'
		},
		{
			name: 'Damien',
			position: 'Programmer & 2D Artist',
			website: 'https://damien.stamates.io',
			avatarPath: 'images/team/damien.png'
		},
		{
			name: 'Matek',
			position: 'Programmer',
			website: 'https://matek.dev/',
			avatarPath: 'images/team/matek.jpg'
		}
	];
</script>

<div class="container p-8 m-auto min-h-screen">
	<div class="min-h-[50vh]">
		<h1 class="font-bold text-4xl pb-8">Meet the Apes</h1>
		<ul class="items-center -m-4 flex flex-wrap justify-items-stretch">
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
</div>
