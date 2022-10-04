const $ = (css, root = document) => root.querySelector(css);
const $$ = (css, root = document) => [...root.querySelectorAll(css)];
const $x = (path, root = document) => {
  const expression = (new XPathEvaluator).createExpression(path);
  const xpath = expression.evaluate(root, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE);
  const result = [];
  for (let i = 0, {snapshotLength} = xpath; i < snapshotLength; i++)
    result.push(xpath.snapshotItem(i));
  return result;
};

export { $, $$, $x };
