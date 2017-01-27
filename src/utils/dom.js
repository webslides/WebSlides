export default class DOM {
  static createNode(tag, id = '', text = null) {
    const node = document.createElement(tag);
    node.id = id;

    if (text) {
      node.textContent = text;
    }

    return node;
  }

  static hide(el) {
    el.style.display = 'none';
  }

  static show(el) {
    el.style.display = '';
  }

  static lockScroll() {
    document.documentElement.style.overflow = 'hidden';
  }

  static unlockScroll() {
    document.documentElement.style.overflow = 'auto';
  }
}
