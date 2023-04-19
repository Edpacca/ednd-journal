<script>
    import { UserType } from "../../lib/types";
    import { userType } from "../../state/store";
</script>

<div>
    {#if $userType === UserType.PLAYER}
        Here are all the places you have visited so far. If any are missing be sure to let your DM know.
    {:else}
        Here are the general locations that can be found upon the Isle of Murraka.
    {/if}
</div>