import test from "node:test";
import assert from "node:assert";
import "./index.js";

test("AbortController", () => assert(AbortController));
test("AbortSignal", () => assert(AbortSignal));
test("Blob", () => assert(Blob));
test("ByteLengthQueuingStrategy", () => assert(ByteLengthQueuingStrategy));
test("CompressionStream", () => assert(CompressionStream));
test("CountQueuingStrategy", () => assert(CountQueuingStrategy));
test("Crypto", () => assert(Crypto));
test("CryptoKey", () => assert(CryptoKey));
test("DecompressionStream", () => assert(DecompressionStream));
test("DOMException", () => assert(DOMException));
test("Event", () => assert(Event));
test("EventTarget", () => assert(EventTarget));
test("File", () => assert(File));
test("ReadableByteStreamController", () =>
  assert(ReadableByteStreamController));
test("ReadableStream", () => assert(ReadableStream));
test("ReadableStreamBYOBReader", () => assert(ReadableStreamBYOBReader));
test("ReadableStreamBYOBRequest", () => assert(ReadableStreamBYOBRequest));
test("ReadableStreamDefaultController", () =>
  assert(ReadableStreamDefaultController));
test("ReadableStreamDefaultReader", () => assert(ReadableStreamDefaultReader));
test("SubtleCrypto", () => assert(SubtleCrypto));
test("TextDecoder", () => assert(TextDecoder));
test("TextDecoderStream", () => assert(TextDecoderStream));
test("TextEncoder", () => assert(TextEncoder));
test("TextEncoderStream", () => assert(TextEncoderStream));
test("TransformStream", () => assert(TransformStream));
test("TransformStreamDefaultController", () =>
  assert(TransformStreamDefaultController));
test("URL", () => assert(URL));
test("URLPattern", () => assert(URLPattern));
test("URLSearchParams", () => assert(URLSearchParams));
test("WritableStream", () => assert(WritableStream));
test("WritableStreamDefaultController", () =>
  assert(WritableStreamDefaultController));
test("globalThis", () => assert(globalThis));
test("globalThis.atob", () => assert(globalThis.atob));
test("globalThis.btoa", () => assert(globalThis.btoa));
test("globalThis.console", () => assert(globalThis.console));
test("globalThis.crypto", () => assert(globalThis.crypto));
test("globalThis.navigator.userAgent", () =>
  assert(globalThis.navigator.userAgent));
test("globalThis.queueMicrotask", () => assert(globalThis.queueMicrotask));
test("globalThis.setTimeout", () => assert(globalThis.setTimeout));
test("globalThis.clearTimeout", () => assert(globalThis.clearTimeout));
test("globalThis.setInterval", () => assert(globalThis.setInterval));
test("globalThis.clearInterval", () => assert(globalThis.clearInterval));
test("globalThis.structuredClone", () => assert(globalThis.structuredClone));
