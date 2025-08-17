import { getContext, setContext } from "svelte";
import type { LocalStorage } from "../states/storage.svelte";
import type { LandSettings } from "./settings";

type ModalType = "" | "modal" | "login" | "signup" | "error" | "exlogin";

export type Debug = {
	firstPopup?: LocalStorage<boolean>;
	secondPopup?: LocalStorage<boolean>;
	modal?: LocalStorage<ModalType>;
	clicks?: LocalStorage<number>;
	settings?: LandSettings;
};

const key = Symbol("debug");

export const useDebugContext = () => getContext<Debug>(key);
export const initDebugContext = (input: Debug) => setContext(key, input);
