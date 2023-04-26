# basic-devtools

[![Coverage Status](https://coveralls.io/repos/github/WebReflection/basic-devtools/badge.svg?branch=main)](https://coveralls.io/github/WebReflection/basic-devtools?branch=main) [![build status](https://github.com/WebReflection/basic-devtools/actions/workflows/node.js.yml/badge.svg)](https://github.com/WebReflection/basic-devtools/actions)

<sup>**Social Media Photo by [Basic Moto France](https://unsplash.com/@basic_moto) on [Unsplash](https://unsplash.com/)**</sup>

Exports `$`, `$$`, and `$x` utilities as described in [Chrome Console Utilities API reference](https://developer.chrome.com/docs/devtools/console/utilities/), all in 242 bytes once "*minzipped*" or 206 bytes once "*minbrotlied*".

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

### What's the deal with XPath?

It's extremely powerful but also generally faster than a *TreeWalker*, as you can [**test live**](https://webreflection.github.io/basic-devtools/test/).

As example, let's consider this **Question**:

> "_How would I grab all data-* attributes and reach their element with a single-pass query?_"

**Answer**

```js
// grab all nodes with data-* attributes
const allDataAttributes = $x('//@*[starts-with(name(), "data-")]');

// loop all returned attributes and do something
for (const {name, value, ownerElement} of allDataAttributes) {
  // ownerElement is the element using data-* attribute
  // name is the data-* attribute name
  // value is its value
}
```

You can have a gist of various other features via this awesome [Xpath cheatsheet](https://devhints.io/xpath).
