<script lang="ts">
    import type { PageData } from "./$types";
	export let data: PageData;
</script>

<h1>{data.journal.title}</h1>
<div>{data.journal.content}</div>
