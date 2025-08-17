import { browser } from "$app/environment";

export function analyticsEnabled() {
	return !!window.dataLayer;
}
export function capture(event: string, gtm = {}) {
	if (!browser) return;
	try {
		if (window.dataLayer) {
			window.dataLayer.push({
				event,
				...gtm,
			});
		}
	} catch (err) {
		// whatever happens, we should never throw from analytics
		console.error(err);
	}
}
