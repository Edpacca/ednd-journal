<script>
    import BackgroundBorder from "$lib/components/graphics/decoration/BackgroundBorder.svelte";
    import Nav from "$lib/components/nav/Nav.svelte";
</script>

<Nav/>
<main>
    <BackgroundBorder colour="burlywood" opacity={0.4}/>
    <div class="content">
        <slot/>
    </div>
</main>
<footer>
    <h2>Edpacca's Isle of Murraka</h2>
</footer>


<style>

    main {
        position: relative;
        flex: auto;
        z-index: 0;
        background: var(--background-url);
    }
    
    .content {
        padding: var(--default-padding);
        text-align: center;
        z-index: 2;
        position: relative;
        height: 100%;
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--footer-height);
        padding: 1rem;
        z-index: 3  ;
        background-color: var(--secondary);
        border-top: var(--border-width) solid var(--primary);
    }
</style>