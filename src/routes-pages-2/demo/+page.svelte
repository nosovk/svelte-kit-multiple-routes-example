<script lang="ts">
	import Demo2 from "$lib/landing/Demo2/index.svelte";
    import { redirectExample } from "../redirectPatterns";
	import { initSettings } from "$lib/services/settings.js";

	let tags = "type-land,brand-brand,action-register,template-sweet-short,reg-short";
	let brand = "brand" as const;
	let customInlang = "demo" as const;

	let { redirectUrl } = redirectExample();
	initSettings({
		redirectUrl,
		brand,
		customInlang,
		tags
	});
</script>

<svelte:head>
	<link rel="icon" href="/demo/favicon.svg" />
	<title>Example</title>
</svelte:head>
<Demo2 />
