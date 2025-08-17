import { getContext, setContext } from "svelte";


type CustomInlang = "demo" | "" | "land_a" | "land_b";

export type LandSettings = {
	banner?: Banner;
	apiUrl?: string;
	redirectUrl?: string;
	termsUrl?: string;
	baseCurr?: string;
	showPhoneNumber?: boolean;
	customInlang: CustomInlang;
};

const key = Symbol("land_settings");

export const useSettings = () => getContext<LandSettings>(key);

export const initSettings = (input: LandSettings) => setContext(key, input);
