<script lang="ts">
    export let content: string;
    export let onClick: () => void = () => {};
</script>

<button on:click={onClick}>
    <div class="content">{content}</div>
</button>

<style>
    button {
        padding: 1.5em 3em;
        background: transparent;
        border: none;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url("/textures/stone-texture.webp");
        background-size: 500px;
        clip-path: polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0 50%);
    }

    .content {
        color: rgb(255, 225, 149);
        filter: drop-shadow(1px 1px 2px orange);
        font-family: "Cinzel Decorative";
        font-weight: bold;
        font-size: 2em;
    }
</style>