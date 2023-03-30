<script>
    import Bar from "../components/graphics/decoration/bar.svelte";
    import Corner from "../components/graphics/decoration/corner.svelte";

</script>
<svelte:head>
    <style>
        :root {
            --navbar-height: 32px;
            --footer-height: 64px;
            
            --default-padding: 8px;

            --border-width: 2px;


            --corner-padding: 16px;
        }
    </style>
</svelte:head>

<nav>
    <a href="/" class="nav-link">Home</a>
    <a href="/locations" class="nav-link">Locations</a>
    <a href="/npcs" class="nav-link">NPCs</a>
    <a href="/journal" class="nav-link">Journal</a>
</nav>
<main>
    <div class="corners">
        <Corner position="top-left" colour="burlywood"/>
        <Corner position="top-right" colour="burlywood"/>
        <Corner position="bottom-left" colour="burlywood"/>
        <Corner position="bottom-right" colour="burlywood"/>
    </div>
    <div class="content">
        <slot></slot>
    </div>
</main>
<footer>
    <div class="footer-title">
        Edpacca's Isle of Murraka
    </div>
</footer>


<style>
    nav {
        background-color: burlywood;
        color: brown;
        font-size: 1.2rem;
        display: flex;
        column-gap: 16px;
        align-items: center;
        justify-content: center;
        height: var(--navbar-height);
        font-weight: bold;
        border-bottom: var(--border-width) solid brown;
    }

    main {
        background: url("/background/water-parchment.webp");
        top: calc(var(--navbar-height) + var(--border-width));
        bottom: calc(var(--footer-height) + var(--border-width) + var(--navbar-height));
        position: fixed;
        left: 0;
        right: 0;
    }

    .corners {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.4;
        z-index: -1;
    }

    .content {
        padding: var(--default-padding);
        text-align: center;
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: var(--border-width) solid brown;
        background-color: burlywood;
        width: 100%;
        height: var(--footer-height);
        padding: 1rem;
        position: fixed;
        bottom: 0;
    }

    .footer-title {
        font-weight: bold;
        font-size: 1.5rem;
        color: brown

    }
</style>