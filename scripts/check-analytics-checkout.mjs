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

const listeners = new Map();
const mutationCallbacks = [];
const tracked = [];
let overlayOpen = false;

const card = {
	dataset: {
		tierId: "pro",
		tierName: "PRO",
		tierPrice: "79",
	},
};

const checkoutLink = {
	dataset: {},
	getAttribute(name) {
		return name === "href" ? "https://reumbra.lemonsqueezy.com/checkout/buy/pro-variant" : null;
	},
	closest(selector) {
		if (selector === "a[href*='lemonsqueezy']" || selector === "a") return checkoutLink;
		if (selector === "[data-tier-id]") return card;
		return null;
	},
	textContent: "Get Pro",
};

const document = {
	body: {},
	documentElement: { lang: "en" },
	addEventListener(type, listener) {
		const registered = listeners.get(type) || [];
		registered.push(listener);
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

const context = vm.createContext({
	document,
	exports: {},
	IntersectionObserver,
	location: { pathname: "/pricing/" },
	module: { exports: {} },
	MutationObserver,
	window: {},
	zaraz: {
		track(event, properties = {}) {
			tracked.push({ event, properties });
		},
	},
});

vm.runInContext(compiled, context, { filename: "analytics.js" });

for (const listener of listeners.get("click") || []) {
	listener({ target: checkoutLink });
}

const events = (name) => tracked.filter(({ event }) => event === name);

assert.equal(events("select_item").length, 1, "one click must emit select_item once");
assert.equal(
	events("begin_checkout").length,
	1,
	"one accepted checkout click must emit begin_checkout immediately",
);

const beginCheckout = events("begin_checkout")[0].properties;
assert.deepEqual(JSON.parse(JSON.stringify(beginCheckout)), {
	item_id: "pro",
	item_name: "PRO",
	price: 79,
	currency: "EUR",
	source_page: "pricing",
	page_language: "en",
});

overlayOpen = true;
for (const callback of mutationCallbacks) callback([]);
assert.equal(
	events("begin_checkout").length,
	1,
	"opening the overlay must not duplicate begin_checkout",
);

console.log("Analytics checkout contract passed: click=1, overlay duplicate=0");
