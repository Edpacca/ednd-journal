<div class="page">
    <nav>
        <a href="/" class="nav-link">Home</a>
        <a href="/locations" class="nav-link">Locations</a>
        <a href="/npcs" class="nav-link">NPCs</a>
        <a href="/journal" class="nav-link">Journal</a>
    </nav>
    <main>
        <slot></slot>
    </main>
    <footer>
        <div class="footer-title">
            Edpacca's Isle of Murraka
        </div>
    </footer>
</div>


<style>
    .page { 
        display: grid;
        grid-template-rows: auto 1fr auto;
        width: 100vw;
        height: 100%;
        min-height: 100%;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: hidden;
    }

    main {
        padding: 8px;
    }

    nav {
        background-color: burlywood;
        color: brown;
        font-size: 1.2rem;
        display: flex;
        column-gap: 16px;
        align-items: center;
        justify-content: center;
        height: 32px;
        font-weight: bold;
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 2px solid brown;
        background-color: burlywood;
        width: 100%;
        padding: 1rem;
    }

    .footer-title {
        font-weight: bold;
        font-size: 1.5rem;
        color: brown
    }
</style>