<script>
    import BackgroundBorder from "../components/graphics/decoration/BackgroundBorder.svelte";
</script>

<nav>
    <a href="/" class="nav-link">Home</a>
    <a href="/locations" class="nav-link">Locations</a>
    <a href="/npcs" class="nav-link">NPCs</a>
    <a href="/journal" class="nav-link">Journal</a>
</nav>
<main>
    <BackgroundBorder colour="burlywood" opacity={0.4}/>
    <div class="content">
        <slot></slot>
    </div>
</main>
<footer>
    <h2>Edpacca's Isle of Murraka</h2>
</footer>


<style>
    nav {
        height: var(--navbar-height);
        display: flex;
        column-gap: 16px;
        align-items: center;
        justify-content: center;

        background-color: var(--secondary);
        color: var(--primary);
        border-bottom: var(--border-width) solid brown;
        font-size: 1.2rem;
        font-weight: bold;
    }

    main {
        position: relative;
        flex: auto;
        background: var(--background-url);
    }

    .content {
        padding: var(--default-padding);
        text-align: center;
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