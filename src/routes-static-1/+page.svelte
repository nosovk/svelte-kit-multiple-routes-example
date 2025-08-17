<script>
    import {getLocale, localizeHref} from "$lib/paraglide/runtime";

	let locale = $derived(getLocale());
</script>

<h1>static adapter 1</h1>
<h2>current lang: {locale}</h2>

<a href={localizeHref("/demo-static")}>demo in current lang</a>
<a href="en/demo-static">demo:en</a>
<a href="uk/demo-static">demo:uk</a>
<a href="tr/demo-static">demo:tr</a>

<br />
<a href="en/land_a">land_a:en</a>
<a href="uk/land_a">land_a:uk</a>
<a href="tr/land_a">land_a:tr</a>

<br />
<a href="/en/land_a">land_b:en</a>
<a href="/uk/land_a">land_b:uk</a>
<a href="/tr/land_a">land_b:tr</a>
