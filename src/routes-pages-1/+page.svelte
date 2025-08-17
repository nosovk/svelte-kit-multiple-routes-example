<script lang="ts">
	import { initSettings } from "$lib/services/settings.js";
	import Demo from "$lib/landing/Demo/index.svelte";
	import { localizeHref } from "$lib/paraglide/runtime";

	initSettings({
		customInlang: "land_a",
	});
</script>

<h1>cloudflare pages adapter 1</h1>

<br />
<a href={localizeHref("/demo")}>demo in current lang</a>
<a href="/en/demo">demo:en</a>
<a href="/uk/demo">demo:uk</a>
<a href="/tr/demo">demo:tr</a>

<br />
<a href="/en/land_a">land_a:en</a>
<a href="/uk/land_a">land_a:uk</a>
<a href="/tr/land_a">land_a:tr</a>

<br />
<a href="/en/land_a">land_b:en</a>
<a href="/uk/land_a">land_b:uk</a>
<a href="/tr/land_a">land_b:tr</a>
