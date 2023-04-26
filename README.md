# basic-devtools

Exports `$`, `$$`, and `$x` utilities as described in [Chrome Console Utilities API reference](https://developer.chrome.com/docs/devtools/console/utilities/), all in 242 bytes once "*minzipped*" or 206 bytes once "*minbrotlied*".

```js
import {$, $$, $x} from 'basic-devtools';

// dummy example with all cases
$('nope') === null;                 // true
$('body') === document.body;        // true
$$('body').length === 1;            // true
$$('body')[0] === document.body;    // true
$x('//body').length === 1;          // true
$$('//body')[0] === document.body;  // true
// more tests in ./test/index.html
```
