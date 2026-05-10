// Polyfill for node:async_hooks in browser environment
if (typeof window !== 'undefined') {
  // @ts-ignore
  globalThis.AsyncLocalStorage = class AsyncLocalStorage {
    constructor() {}
    run(store: any, callback: Function, ...args: any[]) {
      return callback(...args);
    }
    getStore() {
      return undefined;
    }
    enterWith(store: any) {}
    disable() {}
  };
}

export {};
