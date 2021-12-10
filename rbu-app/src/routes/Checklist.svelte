<script>
	import Footer from "../modules/Footer.svelte"
	import Header from "../modules/Header.svelte"
	import Announcement from "../modules/Announcement.svelte";
    import Gratuity from "../modules/checklist/Gratuity.svelte";
    import Terminal from "../modules/checklist/Terminal.svelte";

    let search = ''
	let options = ['Gratuity','Terminal','Death Benefits [DSC]','Special Financial Assistance [DSC]','TPPD Benefits [TPPD]','Special Financial Assistance [TPPD]','Optional Retirement Application','BFP Special Project Fund']
</script>

<div class="text-center mx-auto max-w-2xl">
	<Header></Header>
	<Announcement></Announcement>		
	<div class="content space-y-4">
        <h4 class="text-2xl">Checklist of Requirements for Claims/Application</h4>
        <input class="w-1/2" bind:value={search} type="text" placeholder="Click here!" list="claims_list" on:dblclick={()=>search=''} />
        <datalist id="claims_list">
            <option selected value=""/>
            {#each options as item}
                <option value={item}/>
            {/each}
        </datalist>
        {#if search=='Gratuity'}
            <Gratuity></Gratuity>
        {:else if search=='Terminal'}
            <Terminal></Terminal>
        {/if}

	</div>
	<Footer></Footer>
</div>