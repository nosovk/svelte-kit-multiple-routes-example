import { dev } from "$app/environment";

const handleCloseEvent = (e: BeforeUnloadEvent) => {
	e.preventDefault();
	e.returnValue = "";
	return "Do you want to close this tab?";
};

let initialized = false;

class CloseHandler {
	constructor() {
		$effect.root(() => {
			if (dev) return;
            initialized = true;
			window.onbeforeunload = handleCloseEvent;
			return () => {
				// window.onbeforeunload = null;
			};
		});
	}

	get enabled() {
		return initialized && window?.onbeforeunload != null;
	}

	enable(customHandler?: (e: BeforeUnloadEvent) => string) {
		if (dev) return;
		window.onbeforeunload = customHandler ?? handleCloseEvent;
	}
	disable() {
		window.onbeforeunload = null;
	}
}

const closeHandler = new CloseHandler();
export default closeHandler;
