<script lang="ts">
	import { type Snippet } from "svelte";
	import { PUBLIC_DEBUG } from "$env/static/public";
	import { initDebugContext } from "$lib/services/debug";
	import closeHandler from "$lib/states/close-handler.svelte";

	let { children }: { children: Snippet } = $props();

	if (PUBLIC_DEBUG) {
		initDebugContext({});
	}

	// following code prevents the page from closing
	console.log("closeHandler:", closeHandler.enabled);
</script>

{@render children?.()}
