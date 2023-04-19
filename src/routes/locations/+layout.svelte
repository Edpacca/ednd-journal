<script lang="ts">
    import LinkButton from '../../components/common/LinkButton.svelte';
    import type { LayoutData } from './$types';
    export let data: LayoutData;
</script>

<h1>Locations</h1>
<slot></slot>
<div class="button-menu">
    {#each data.sections as section}
        <LinkButton href="/locations/{section.slug}">
            {section.title}
        </LinkButton>
    {/each}
</div>
