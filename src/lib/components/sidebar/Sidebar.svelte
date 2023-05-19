<div class="sidebar">
    <slot/>
</div>

<style>
    .sidebar {
        width: 15rem;
        border-right: 2px solid brown;
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        height: 100%;
    }
</style>