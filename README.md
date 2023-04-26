# basic-devtools

[![Coverage Status](https://coveralls.io/repos/github/WebReflection/basic-devtools/badge.svg?branch=main)](https://coveralls.io/github/WebReflection/basic-devtools?branch=main) [![build status](https://github.com/WebReflection/basic-devtools/actions/workflows/node.js.yml/badge.svg)](https://github.com/WebReflection/basic-devtools/actions)

<sup>**Social Media Photo by [Basic Moto France](https://unsplash.com/@basic_moto) on [Unsplash](https://unsplash.com/)**</sup>

Exports `$`, `$$`, and `$x` utilities as described in [Chrome Console Utilities API reference](https://developer.chrome.com/docs/devtools/console/utilities/), all in 242 bytes once "*minzipped*" or 206 bytes once "*minbrotlied*".

[**Live Test**](https://webreflection.github.io/basic-devtools/test/).

```js
import {$, $$, $x} from 'basic-devtools';

// single node
$('nope') === null;                 // true
$('body') === document.body;        // true

// list of nodes
$$('body').length === 1;            // true
$$('body')[0] === document.body;    // true

// list of evaluated nodes
$x('//body').length === 1;          // true
$x('//body')[0] === document.body;  // true
```
