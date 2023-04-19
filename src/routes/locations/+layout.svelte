<script lang="ts">
    import type { LayoutData } from './$types';
  
    export let data: LayoutData;
</script>

<h1>Locations</h1>
<slot></slot>
<div class="submenu">
    {#each data.sections as section}
        <a href="/locations/{section.slug}">{section.title}</a>
    {/each}
</div>


<style>
    .submenu {
        display: grid;
        text-align: left;
    }
</style>