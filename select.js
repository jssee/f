/**
 * Quickly get elements using a string with CSS syntax
 * @example
 * // returns the DOM element with id #app
 * select('#app');
 * @param {string} selector the selector you wish to return
 */
const select = selector => {
  if (selector == 'body') {
    return document.body;
  } else if (selector == 'head') {
    return document.head;
  } else if (/^[\#.]?[\w-]+$/.test(selector)) {
    switch (selector[0]) {
      case '#':
        return document.getElementsById(selector.slice(1));
      case '.':
        return document.getElementsByClassName(selector.slice(1));
      default:
        return document.getElementByTagName(selector);
    }
  }
  return document.querySelectorAll(selector);
};

export default select;
