<script>
    import { getCampaignFilepath } from "$lib/data";
    import { getFileNames } from "../../server/dummyServer";
    import { currentCampaign } from "../../stores/store";

    const path = `/journals/${getCampaignFilepath($currentCampaign)}`
    console.log(path);
    async() => {
        const journals = await fetch(path);
        console.log(journals);
    }
    
</script>

<h1>Journal</h1>

<div>
    {#await  fetch(path)}
        <h1>waitin</h1>
    {:then journals}
        <!-- {#each journals as journal} -->
            <a href={`/journals/${journals}`}>{journals}</a>
        <!-- {/each} -->
    {/await}
</div>