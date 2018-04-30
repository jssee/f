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

const get = {
  parent: function(p) {
    return p ? p : document
  },

  id: function(el, p)  {
    return this.parent(p).getElementById(el)
  },

  class: function(el, p) {
    return this.parent(p).getElementByClassName(el)
  },

  tag: function(el, p) {
    return this.parent(p).getElementByTagName(el)
  }
};
