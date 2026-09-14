import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const sourceLocation =
	process.argv[2] === "-" ? 0 : new URL("../src/shared/tracking/analytics.ts", import.meta.url);
const source = readFileSync(sourceLocation, "utf8");
const compiled = ts.transpileModule(source, {
	compilerOptions: {
		module: ts.ModuleKind.CommonJS,
		target: ts.ScriptTarget.ES2022,
	},
}).outputText;

class MemoryStorage {
	#values = new Map();

	getItem(key) {
		return this.#values.get(key) ?? null;
	}

	setItem(key, value) {
		this.#values.set(key, String(value));
	}

	removeItem(key) {
		this.#values.delete(key);
	}
}

let attemptSequence = 0;

function runPage({ href, localStorage, sessionStorage }) {
	const listeners = new Map();
	const mutationCallbacks = [];
	const tracked = [];
	const lemonEvents = [];
	let overlayOpen = false;
	let checkoutHref = "https://reumbra.lemonsqueezy.com/checkout/buy/pro-variant";

	const card = {
		dataset: {
			tierId: "pro",
			tierName: "PRO",
			tierPrice: "79",
		},
	};

	const checkoutLink = {
		dataset: {},
		id: "",
		textContent: "Get Pro",
		closest(selector) {
			if (selector === "a[href*='lemonsqueezy']" || selector === "a") return checkoutLink;
			if (selector === "[data-tier-id]") return card;
			return null;
		},
		getAttribute(name) {
			return name === "href" ? checkoutHref : null;
		},
		hasAttribute() {
			return false;
		},
		setAttribute(name, value) {
			if (name === "href") checkoutHref = value;
		},
	};

	const document = {
		body: {},
		documentElement: { lang: "en" },
		addEventListener(type, listener, options) {
			const registered = listeners.get(type) || [];
			registered.push({ listener, capture: options === true || options?.capture === true });
			listeners.set(type, registered);
		},
		getElementById() {
			return null;
		},
		querySelector(selector) {
			return selector === ".lemonsqueezy-overlay" && overlayOpen ? {} : null;
		},
		querySelectorAll() {
			return [];
		},
	};

	class IntersectionObserver {
		disconnect() {}
		observe() {}
		unobserve() {}
	}

	class MutationObserver {
		constructor(callback) {
			mutationCallbacks.push(callback);
		}
		observe() {}
	}

	const pageUrl = new URL(href);
	const LemonSqueezy = {
		Setup({ eventHandler }) {
			lemonEvents.push(eventHandler);
		},
	};
	const window = { LemonSqueezy };
	const context = vm.createContext({
		crypto: {
			randomUUID() {
				attemptSequence += 1;
				return `00000000-0000-4000-8000-${String(attemptSequence).padStart(12, "0")}`;
			},
		},
		document,
		exports: {},
		IntersectionObserver,
		LemonSqueezy,
		localStorage,
		location: {
			href: pageUrl.toString(),
			pathname: pageUrl.pathname,
			search: pageUrl.search,
		},
		module: { exports: {} },
		MutationObserver,
		sessionStorage,
		URL,
		URLSearchParams,
		window,
		zaraz: {
			track(event, properties = {}) {
				tracked.push({ event, properties });
			},
		},
	});

	vm.runInContext(compiled, context, { filename: "analytics.js" });

	return {
		dispatchCheckoutClick() {
			const clickListeners = listeners.get("click") || [];
			for (const { listener } of clickListeners.filter(({ capture }) => capture)) {
				listener({ target: checkoutLink });
			}
			const checkoutUrlSeenByLemon = checkoutHref;
			for (const { listener } of clickListeners.filter(({ capture }) => !capture)) {
				listener({ target: checkoutLink });
			}
			return checkoutUrlSeenByLemon;
		},
		fireCheckoutSuccess() {
			for (const eventHandler of lemonEvents) {
				eventHandler({ event: "Checkout.Success", data: { order: { data: { id: "order-1" } } } });
			}
		},
		fireOverlayMutation() {
			overlayOpen = true;
			for (const callback of mutationCallbacks) callback([]);
		},
		events(name) {
			return tracked.filter(({ event }) => event === name);
		},
	};
}

function customData(checkoutUrl) {
	const values = {};
	for (const [key, value] of new URL(checkoutUrl).searchParams) {
		if (key.startsWith("checkout[custom][") && key.endsWith("]")) {
			values[key.slice("checkout[custom][".length, -1)] = value;
		}
	}
	return values;
}

const localStorage = new MemoryStorage();
const sessionStorage = new MemoryStorage();

runPage({
	href: "https://forge.reumbra.com/?utm_source=reddit&utm_medium=paid_social&utm_campaign=launch&utm_content=demo&utm_term=agents&gclid=g-1&gbraid=gb-1&wbraid=wb-1&measurement_run_id=run-control-1",
	localStorage,
	sessionStorage,
});
runPage({
	href: "https://forge.reumbra.com/docs/?utm_source=&utm_campaign=replacement",
	localStorage,
	sessionStorage,
});
const pricingPage = runPage({
	href: "https://forge.reumbra.com/pricing/",
	localStorage,
	sessionStorage,
});

const firstCheckoutUrl = pricingPage.dispatchCheckoutClick();
pricingPage.fireCheckoutSuccess();
assert.equal(
	pricingPage.events("purchase").length,
	0,
	"Checkout.Success must not emit client-side purchase",
);
assert.deepEqual(customData(firstCheckoutUrl), {
	plan: "pro",
	checkout_attempt_id: "00000000-0000-4000-8000-000000000001",
	utm_source: "reddit",
	utm_medium: "paid_social",
	utm_campaign: "launch",
	utm_content: "demo",
	utm_term: "agents",
	gclid: "g-1",
	gbraid: "gb-1",
	wbraid: "wb-1",
	source_page: "pricing",
	page_language: "en",
	measurement_run_id: "run-control-1",
});
assert.equal(customData(firstCheckoutUrl).ga_client_id, undefined);
assert.equal(customData(firstCheckoutUrl).ga_session_id, undefined);
assert.equal(pricingPage.events("select_item").length, 1);
assert.equal(pricingPage.events("begin_checkout").length, 1);

pricingPage.fireOverlayMutation();
assert.equal(
	pricingPage.events("begin_checkout").length,
	1,
	"opening the overlay must not duplicate begin_checkout",
);

const secondCheckoutUrl = pricingPage.dispatchCheckoutClick();
assert.equal(pricingPage.events("select_item").length, 2);
assert.equal(pricingPage.events("begin_checkout").length, 2);
assert.notEqual(
	customData(secondCheckoutUrl).checkout_attempt_id,
	customData(firstCheckoutUrl).checkout_attempt_id,
	"each accepted click must start a new checkout attempt",
);

const anonymousPage = runPage({
	href: "https://forge.reumbra.com/pricing/",
	localStorage: new MemoryStorage(),
	sessionStorage: new MemoryStorage(),
});
const anonymousCheckout = customData(anonymousPage.dispatchCheckoutClick());
assert.equal(anonymousCheckout.ga_client_id, undefined);
assert.equal(anonymousCheckout.ga_session_id, undefined);
assert.equal(anonymousCheckout.source_page, "pricing");
assert.equal(anonymousCheckout.page_language, "en");
assert.equal(anonymousPage.events("begin_checkout").length, 1);

assert.doesNotMatch(
	compiled,
	/GA4_API_SECRET|api_secret|test-ga4-secret/i,
	"the client bundle must not contain GA4 API secrets",
);

console.log(
	"Analytics checkout contract passed: attribution persisted, custom_data enriched, client purchase absent",
);
