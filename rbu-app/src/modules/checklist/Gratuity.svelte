<script>
	let req ={'claimant': [{desc:'Letter of Intent for Retirement Claim',val:true},
												 {desc:'ATM Information w/ signature over printed name of claimant',val:true},
												 {desc:'Latest PDS with picture',val:true},
												 {desc:'Ombudsman Clearance',val:true},
												 {desc:'Declaration of Pendency/Non-Pendency of Case from Civil Service Commission - Original',val:true}
												 ], 
						'regional':[ {desc:'Retirement Order',val:true},
												 {desc:'Latest Statement of Service',val:true},
												 {desc:'Original and Latest Appointment',val:true},
												 {desc:'Regional/National Certificate of Non-Pending Case (RIAS)',val:true}]}
	// const base_claimant_req =[]
	let output = ''
	let show = false
</script>
<style>
	summary:hover{cursor:pointer;user-select:none}
	.line{text-decoration:line-through}
	span:hover{cursor:pointer;background-color:grey;color:white;user-select:none;}
	.refresh:hover{cursor:pointer;color:green}
</style>
<h1>
	Gratuity Claims <span on:click={()=>Object.entries(req).forEach(([d,e])=>{		
		let f='Completed<br/>';let g='Lacking<br/>';
		e.forEach(h=>{
		if(h.val){
			g = g + `${h.desc}<br/>`
		}else{
			f = f + `${h.desc}<br/>`	
		}
		})
		output = output + `<br/>${d.toUpperCase()} REQUIREMENTS<br/>${f}<br/>${g}`
	})} on:click={()=>show=!show} on:click={()=>output=(show)? output:''}>💾</span>
</h1>
{#if show}
		<div class="mx-auto relative p-0 max-w-2xl bg-gray-100 overflow-y-scroll text-xs">{@html output}</div>
{/if}

<details>
		<summary>
			Claimants Requirements <b class="refresh" title="Reset List" on:click|preventDefault={()=>req.claimant =req.claimant.filter(t=>t.val=true)}>🔄</b>
		</summary>
		<p class="text-left pl-8">
			{#each req.claimant as item,i}
				<span class:line={req.claimant[i].val==false } on:click={()=>req.claimant[i].val=!req.claimant[i].val}>{item.desc}</span><br/>
			{/each}
		</p>
</details>
<details>
		<summary>
			Regional Requirements <b class="refresh" title="Reset List" on:click|preventDefault={()=>req.regional =req.regional.filter(t=>t.val=true)}>🔄</b>
		</summary>
		<p class="text-left pl-8">
			{#each req.regional as item,i}
				<span class:line={req.regional[i].val==false } on:click={()=>req.regional[i].val=!req.regional[i].val}>{item.desc}</span><br/>
			{/each}
		</p>
</details>