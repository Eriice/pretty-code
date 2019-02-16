# pretty-code
Highlight your code in angular project. This project base on Angular.io.

[![npm (scoped)](https://img.shields.io/npm/v/@bamblehorse/tiny.svg)](https://www.npmjs.com/package/@bamblehorse/tiny)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@bamblehorse/tiny.svg)](https://www.npmjs.com/package/@bamblehorse/tiny)


## Install

```
$ npm install @eriice/pretty-code --save
```

## Usage

```typescript
import { PrettyCodeModule } from "@eriice/pretty-code";

@NgModule({
  imports: [
    ...
    PrettyCodeModule
  ]
})
```

```html
<app-code-example [config]="configs[0]">
</app-code-example>

<app-code-tabs [configs]="configs"></app-code-tabs>
```

the config of configs variable use follow below

```typescript
interface Config {
  code: string|null;
  language: string|null;
  linenums: boolean | number |string;
  header: string|null;
}
```

![example](http://img.eriice.com/github-pretty-code-fig01.png)




