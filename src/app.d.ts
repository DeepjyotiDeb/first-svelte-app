declare namespace App {
	interface Locals {}

	interface Platform {
		env: {
			COUNTER: DurableObjectNamespace;
		};
		context: {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			waitUntil(promise: Promise<any>): void;
		};
		caches: CacheStorage & { default: Cache };
	}

	interface Session {}

	interface Stuff {}
}
