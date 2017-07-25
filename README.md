# chance-ext [![Build Status](https://travis-ci.org/manovotny/chance-ext.svg?branch=master)](https://travis-ci.org/manovotny/chance-ext)

> A [Chance.js mixin](http://chancejs.com/#mixin) to generate file extensions.

## Install

### NPM

```
$ npm i chance-ext
```

### Yarn

```
$ yarn add chance-ext
```

## Usage

```js
import Chance from 'chance';
import ext from 'chance-ext';

const chance = new Chance();

chance.mixin({
    ext
});

chance.ext();
```

By default, `chance-ext` will return a randomly generated file extension.

Example: `.random`

## License

MIT © [Michael Novotny](http://manovotny.com)
