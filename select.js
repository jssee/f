/**
 * Quickly get elements using a string with CSS syntax
 * @example
 * // returns the DOM element with id #app
 * select('#app');
 * @param {string} s the selector you wish to return
 * 
 */
const select = s => {
  if (s == 'body') {
    return document.body
  }
  else if (s == 'head') {
    return document.head
  }
  else if (/^[\#.]?[\w-]+$/.test(s)) {
    switch (s[0]) {
      case '#':
        return document.getElementsById(s.slice(1))
      case '.':
        return document.getElementsByClassName(s.slice(1))
      default:
        return document.getElementByTagName(s)
    }
  }
  return document.querySelectorAll(s)
}