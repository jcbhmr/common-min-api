![🚧 Under construction 👷‍♂️](https://i.imgur.com/LEP2R3N.png)

# Minimum Common Web Platform API polyfill

🎁 A bundled polyfill for the [Minimum Common Web Platform API]

<div align="center">

![](https://picsum.photos/600/400)

</div>

📋 Use `structuredClone()` everywhere \
🌐 Call `fetch()` with no fear \
🖥️ Works in [Node.js] \
🦕 Works in [Deno] \
🧅 Works in [Bun]

## Installation

![npm](https://img.shields.io/static/v1?style=for-the-badge&message=npm&color=CB3837&logo=npm&logoColor=FFFFFF&label=)
![Yarn](https://img.shields.io/static/v1?style=for-the-badge&message=Yarn&color=2C8EBB&logo=Yarn&logoColor=FFFFFF&label=)
![pnpm](https://img.shields.io/static/v1?style=for-the-badge&message=pnpm&color=222222&logo=pnpm&logoColor=F69220&label=)

You can install this locally using npm, [Yarn], or [pnpm]:

```sh
npm install @jcbhmr/common-min-api
```

You can use this package with Node.js, Deno, or Bun to fill in their own gaps in
the [Minimum Common Web Platform API]. Make sure you're using a relatively
modern version of your runtime so that you can use the least amount of polyfill
code!

⚖️ Don't worry! Each sub-polyfill uses an `if`-gated `import()` so you only pay
for what wasn't already implemented in your environment.

## Usage

![Node.js](https://img.shields.io/static/v1?style=for-the-badge&message=Node.js&color=339933&logo=Node.js&logoColor=FFFFFF&label=)
![Deno](https://img.shields.io/static/v1?style=for-the-badge&message=Deno&color=000000&logo=Deno&logoColor=FFFFFF&label=)
![Bun](https://img.shields.io/static/v1?style=for-the-badge&message=Bun&color=000000&logo=Bun&logoColor=FFFFFF&label=)

```js
import "@jcbhmr/common-min-api";

const b = structuredClone({ n: 1 });
console.log(b.n);
//=> 1
setTimeout(() => reportError(new Error("🌋 Oh no!")), 1000);
const r = crypto.getRandomValues(new Uint8Array(10));
console.info(r);
//=> Uint8Array(10) [...]
const f = new File(["foo"], "foo.txt", { type: "text/plain" });
const u = new URL("https://example.com/foo");
if (new URLPattern("https://example.com/*").test(u)) {
  const response = await fetch(u);
  const text = await response.text();
  console.log(text);
}
```

👴 This polyfill bundle is **not** intended for _ancient_ environments like
IE 11. The purpose of this polyfill bundle is to make it easier to write
isomorphic modern code that uses popular web platform APIs that may not exist on
certain platforms yet.

### What's included?

This package is literally just a shortcut to installing and `import`-ing all of
these packages in your project:

- [jcbhmr/webidl-domexception](https://github.com/jcbhmr/webidl-domexception#readme)
- [jcbhmr/html-timers](https://github.com/jcbhmr/html-timers#readme)
- [jcbhmr/html-microtask-queuing](https://github.com/jcbhmr/html-microtask-queuing#readme)
- [jcbhmr/html-structured-clonin](https://github.com/jcbhmr/html-structured-clonin#readme)
- [jcbhmr/html-btoa](https://github.com/jcbhmr/html-btoa#readme)
- [jcbhmr/console](https://github.com/jcbhmr/console#readme)
- [jcbhmr/html-system-state](https://github.com/jcbhmr/html-system-state#readme)
- [jcbhmr/encoding](https://github.com/jcbhmr/encoding#readme)
- [jcbhmr/streams](https://github.com/jcbhmr/streams#readme)
- [jcbhmr/fileapi](https://github.com/jcbhmr/fileapi#readme)
- [jcbhmr/url](https://github.com/jcbhmr/url#readme)
- [jcbhmr/dom-aborting-ongoing-activities](https://github.com/jcbhmr/dom-aborting-ongoing-activities#readme)
- [jcbhmr/fetch](https://github.com/jcbhmr/fetch#readme)
- [jcbhmr/urlpattern](https://github.com/jcbhmr/urlpattern#readme)
- [jcbhmr/webcrypto](https://github.com/jcbhmr/webcrypto#readme)
- [jcbhmr/compression](https://github.com/jcbhmr/compression#readme)

Here's an excerpt of exactly what we are trying to expose for your application
to use:

> **3. Common API Index**
>
> All Web-interoperable Runtimes conforming to this specification SHALL
> implement each of the following Web Platform APIs in accordance to their
> normative requirements except where modified here. Where any conforming
> runtime environment chooses (either by necessity or otherwise) to diverge from
> a normative requirement of the specification, clear explanations of such
> divergence MUST be made clearly and readily available in documentation.
>
> Interfaces:
>
> - [x] AbortController
> - [x] AbortSignal
> - [x] Blob
> - [x] ByteLengthQueuingStrategy
> - [x] CompressionStream
> - [x] CountQueuingStrategy
> - [x] Crypto
> - [x] CryptoKey
> - [x] DecompressionStream
> - [x] DOMException
> - [x] Event
> - [x] EventTarget
> - [x] File
> - [x] ReadableByteStreamController
> - [x] ReadableStream
> - [x] ReadableStreamBYOBReader
> - [x] ReadableStreamBYOBRequest
> - [x] ReadableStreamDefaultController
> - [x] ReadableStreamDefaultReader
> - [x] SubtleCrypto
> - [x] TextDecoder
> - [x] TextDecoderStream
> - [x] TextEncoder
> - [x] TextEncoderStream
> - [x] TransformStream
> - [x] TransformStreamDefaultController
> - [x] URL
> - [x] URLPattern
> - [x] URLSearchParams
> - [x] WritableStream
> - [x] WritableStreamDefaultController
>
> Global methods / properties:
>
> - [ ] ~~globalThis~~ _ECMAScript-related_
> - [x] globalThis.atob()
> - [x] globalThis.btoa()
> - [x] globalThis.console
> - [x] globalThis.crypto
> - [x] globalThis.navigator.userAgent
> - [x] globalThis.queueMicrotask()
> - [x] globalThis.setTimeout() / globalThis.clearTimeout()
> - [x] globalThis.setInterval() / globalThis.clearInterval()
> - [x] globalThis.structuredClone()

&mdash; [Common API Index | Minimum Common Web Platform API]

## Development

![JavaScript](https://img.shields.io/static/v1?style=for-the-badge&message=JavaScript&color=222222&logo=JavaScript&logoColor=F7DF1E&label=)
![Node.js](https://img.shields.io/static/v1?style=for-the-badge&message=Node.js&color=339933&logo=Node.js&logoColor=FFFFFF&label=)

This package is literally just a bunch of `import` statements. 🤣 You can test
Node.js compatibility by running `npm test`. You'll need to manually check for
Deno and Bun compatibility.

```sh
npm test
```

Regarding versioning: Each child polyfill package should be **pinned** to a
specific version. On patch updates, release a patch update of this package. On
minor updates, release a minor update of this package. On major updates, release
a major update of this package. This is to ensure that the polyfill bundle is
stable and predictable, while also letting `^` and `~` ranges work as expected.

Oh, and we also use **bundleDependencies** to make sure that the you only need
to fetch _this_ package to get all of the dependencies. This is to make it
faster to download.

<!-- prettier-ignore-start -->
[Yarn]: https://yarnpkg.com/
[pnpm]: https://pnpm.io/
[Minimum Common Web Platform API]: https://common-min-api.proposal.wintercg.org/
[Common API Index | Minimum Common Web Platform API]: https://common-min-api.proposal.wintercg.org/#common-api-index
[Node.js]: https://nodejs.org/
[Deno]: https://deno.com/runtime
[Bun]: https://bun.sh/
<!-- prettier-ignore-end -->
