# Pretty-code

This module is an effort to implement highlight code block in Angular project.

This module is seperated from the [Angular.io](https://angular.io/). I follow the source code in custom-elements/code part and packaged secondary. 

  * [License](#license)
  * [Demo](#demo)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Change Log](CHANGELOG.md)

## License

This software is provided free of charge and without restriction under the [MIT License](LICENSE.md)

## Demo

![single code block Example](http://img.eriice.com/github-pretty-code-fig02.png)

![Multiple code block Example](http://img.eriice.com/github-pretty-code-fig01.gif)
## Installation

Please make sure the follow packages have been introduced in your project cause this module is based on [Angular-Material](https://material.angular.io/guide/getting-started).

```
@angular/cdk
@angular/material
@angular/animations
```

This package is installable through NPM.

```
$ npm install @eriice/pretty-code --save
```

Then find your project global scss file (default in `project/src/styles.scss`) and paste the following:

```
@import '~@eriice/pretty-code/ng-io-theme'
```


## Usage

Example module

```typescript
import { PrettyCodeModule } from "@eriice/pretty-code";

@NgModule({
  imports: [
    ...
    PrettyCodeModule
  ]
})
```

Example Template
```html
// single code block
<app-code-example [config]="config"></app-code-example>

// multiple code block
<app-code-tabs [config]="config"></app-code-tabs>
```

Input property

| Property              | Type       | Default  | Description |
| :-------------------- | :--------- | :------- | :---------- |
| `config` | `Config` | `null` | Used to configure code block display including language of code, header, linenum and the code block. |

```typescript
interface Config {
  code: string| null;
  language: string| null;
  linenums: boolean| number| string;
  header: string| null;
}
```
