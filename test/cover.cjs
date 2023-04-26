// dummy XPath utility used only to code cover results
// realt tests are done via browser
Object.assign(globalThis, {
  XPathResult: {ORDERED_NODE_SNAPSHOT_TYPE: 7},
  XPathEvaluator: class {
    createExpression(path) {
      return {
        evaluate(root) {
          const list = $$(path.replace(/[^a-z*]+/g, ''), root);
          return {
            snapshotLength: list.length,
            snapshotItem: i => list[i]
          };
        }
      };
    }
  },
  document: {
    body: {
      firstElementChild: {},
      get querySelector() {
        return querySelector.bind(document);
      },
      get querySelectorAll() {
        return querySelectorAll.bind(document);
      }
    },
    nope: null,
    get ['*']() {
      return this.body.firstElementChild;
    },
    querySelector,
    querySelectorAll
  }
});

// <coverage>
const {$, $$, $x} = require('../cjs');
console.assert($('nope') === null, '$("nope")');
console.assert($('body') === document.body, '$("body")');
console.assert($$('body').length === 1, '$$("body").length');
console.assert($$('body')[0] === document.body, '$$("body")[0]');
console.assert($x('//body').length === 1, '$x("//body").length');
console.assert($x('//body')[0] === document.body, '$x("//body")[0]');
console.assert($('*', document.body) === document.body.firstElementChild, '$("*", document.body)');
console.assert($$('*', document.body).length === 1, '$$("*", document.body).length');
console.assert($$('*', document.body)[0] === document.body.firstElementChild, '$$("*", document.body)[0]');
console.assert($x('.//*', document.body).length === 1, '$x(".//*", document.body).length');
console.assert($x('.//*', document.body)[0] === document.body.firstElementChild, '$x(".//*", document.body)[0]');
// </coverage>

function querySelector(css) {
  return this[css];
}

function querySelectorAll(css) {
  return css === '*' ? [this.body.firstElementChild] : [this.body];
}
