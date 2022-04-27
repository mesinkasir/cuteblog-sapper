<script>
	import Nav from '../components/Nav.svelte';
	import Cofee from '../components/Coffee.svelte';

	export let segment;
</script>
<main class="container">
<Nav {segment}/>
	<slot></slot>
<Cofee/>
</main>