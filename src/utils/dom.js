export default class DOM {
  static createNode(tag, id = '', text = null) {
    const node = document.createElement(tag);
    node.id = id;

    if (text) {
      node.textContent = text;
    }

    return node;
  }
}
