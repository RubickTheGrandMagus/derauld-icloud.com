<script>
	import Footer from "../modules/Footer.svelte"
	import Header from "../modules/Header.svelte"
	import Announcement from "../modules/Announcement.svelte";
	import { push } from "svelte-spa-router";
</script>

<div class="text-center mx-auto max-w-2xl">
	<Header></Header>
	<Announcement></Announcement>		
	<div class="content">
		<ul class="has-text-left pl-6 space-y-2">
			<li class="cursor-pointer hover:text-gray-400">Calculator</li>
			<li class="cursor-pointer hover:text-gray-400" on:click={()=>push('/Checklist')}>CheckList</li>
			<li class="cursor-pointer hover:text-gray-400">Downloads</li>
			<li class="cursor-pointer hover:text-gray-400">FAQ</li>
		</ul>
	</div>
	<Footer></Footer>
</div>
