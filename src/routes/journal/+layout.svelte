<script lang="ts">
    import Sidebar from "$lib/components/sidebar/Sidebar.svelte";
    import type { LayoutData } from "./$types";
    export let data: LayoutData
</script>
<Sidebar>
    <ul>
        {#each data.summaries as { slug, title }}
            <li><a href={`/journals/${slug}`}>{title}</a></li>
        {/each}
    </ul>
</Sidebar>
<slot/>