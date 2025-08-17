import { locales, type Locale } from "$lib/paraglide/runtime";
import type { ParamMatcher } from "@sveltejs/kit";

export const match: ParamMatcher = (param): param is Locale => {
	return locales.includes(param as Locale);
};
