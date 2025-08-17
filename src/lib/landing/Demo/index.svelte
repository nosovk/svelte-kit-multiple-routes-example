<script lang="ts">
	import { useSettings } from "$lib/services/settings";
	import { m } from "$lib/paraglide/messages";
	import { setLocale, getLocale } from "$lib/paraglide/runtime";

	const settings = useSettings();

	let inlang_prefix = $derived(settings.customInlang || "land_a");
</script>

<section>
	<h2>use settings</h2>
	<p>current brand: {settings.brand}</p>
</section>

<section>
	<h2>use inlang</h2>
	<p>current lang: {getLocale()}</p>
	<p>prefix: {inlang_prefix}</p>
	<p>translate: {m[`${inlang_prefix}.name`]()}</p>
	<p>change lang:</p>
	<button onclick={() => setLocale("en")}>en</button>
	<button onclick={() => setLocale("tr")}>tr</button>
</section>

<section>
	<h2>use image optimizer</h2>
	<enhanced:img src="$lib/assets/demo.jpg?w=1280;640;400" />
</section>
