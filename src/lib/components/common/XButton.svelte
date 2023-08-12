<script lang="ts">
    import FaIcon from "./FaIcon.svelte";

    export let onClick: () => void; 
</script>

<button on:click={onClick}>
    <FaIcon icon={"faXmark"}/>
</button>

<style>
    button {
        color: var(--grey);
        border: none;
        background: none;
        margin: 0;
        padding: 0;
    }

    button:hover {
        color: var(--red);
    }
</style>