<script>
    import BackgroundBorder from "../components/graphics/decoration/BackgroundBorder.svelte";
    import Nav from "../components/nav/Nav.svelte";
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
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--footer-height);
        padding: 1rem;

        background-color: var(--secondary);
        border-top: var(--border-width) solid var(--primary);
    }
</style>