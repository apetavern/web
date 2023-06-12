<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>

<div class="flex flex-col min-h-screen font-cabin">
	<Header />
	<div class="flex-1">
		<slot />
	</div>
	<Footer />
</div>
