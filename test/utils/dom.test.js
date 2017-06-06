import DOM from '../../src/js/utils/dom';
import simulant from 'simulant';

describe('Node creation', () => {
  test('Creates a node', () => {
    const node = DOM.createNode('p');

    expect(node).toBeInstanceOf(Element);
    expect(node.tagName).toBe('P');
    expect(node.id).toBe('');
  });

  test('Should be possible to pass an id', () => {
    const node = DOM.createNode('p', 'myId');

    expect(node.id).toBe('myId');
  });

  test('Should be possible to pass text', () => {
    const node = DOM.createNode('p', 'id', 'foo');

    expect(node.textContent).toBe('foo');
  });
});

describe('Once', () => {
  let parent;
  let inner;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="parent">
        <div id="inner"></div>
      </div>
    `;
    parent = document.getElementById('parent');
    inner = document.getElementById('inner');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('Only once called once', () => {
    const cb = jest.fn();
    DOM.once(parent, 'click', cb);
    simulant.fire(parent, 'click');
    simulant.fire(parent, 'click');
    simulant.fire(parent, 'click');

    expect(cb).toHaveBeenCalledTimes(1);
  });

  test('Callback doesn\'t run on bubbled event', () => {
    const cb = jest.fn();
    DOM.once(parent, 'click', cb);
    simulant.fire(inner, 'click');

    expect(cb).not.toHaveBeenCalled();
  });
});

describe('Transition', () => {
  test('Returns unprefixed first if available', () => {
    const fakeEl = {
      style: {
        transition: 'foo',
        OTransition: 'foo',
        MozTransition: 'foo',
        WebkitTransition: 'foo'
      }
    };

    expect(DOM.getTransitionEvent(fakeEl)).toBe('transitionend');
  });

  test('Prefixed Opera', () => {
    const fakeEl = {
      style: {
        OTransition: 'foo'
      }
    };

    expect(DOM.getTransitionEvent(fakeEl)).toBe('oTransitionEnd');
  });


  test('Prefixed Gecko', () => {
    const fakeEl = {
      style: {
        MozTransition: 'foo'
      }
    };

    expect(DOM.getTransitionEvent(fakeEl)).toBe('transitionend');
  });


  test('Prefixed Webkit', () => {
    const fakeEl = {
      style: {
        WebkitTransition: 'foo'
      }
    };

    expect(DOM.getTransitionEvent(fakeEl)).toBe('webkitTransitionEnd');
  });

  test('Retains value', () => {
    const fakeEl = {
      style: {
        WebkitTransition: 'foo'
      }
    };

    expect(DOM.getTransitionEvent(fakeEl)).toBe('webkitTransitionEnd');
    expect(DOM.getTransitionEvent()).toBe('webkitTransitionEnd');
  });
});

describe('Animation', () => {
  test('Returns unprefixed first if available', () => {
    const fakeEl = {
      style: {
        animation: 'foo',
        OAnimation: 'foo',
        MozAnimation: 'foo',
        WebkitAnimation: 'foo'
      }
    };

    expect(DOM.getAnimationEvent(fakeEl)).toBe('animationend');
  });

  test('Prefixed Opera', () => {
    const fakeEl = {
      style: {
        OAnimation: 'foo'
      }
    };

    expect(DOM.getAnimationEvent(fakeEl)).toBe('oAnimationEnd');
  });

  test('Prefixed Gecko', () => {
    const fakeEl = {
      style: {
        MozAnimation: 'foo'
      }
    };

    expect(DOM.getAnimationEvent(fakeEl)).toBe('animationend');
  });

  test('Prefixed Webkit', () => {
    const fakeEl = {
      style: {
        WebkitAnimation: 'foo'
      }
    };

    expect(DOM.getAnimationEvent(fakeEl)).toBe('webkitAnimationEnd');
  });

  test('Retains value', () => {
    const fakeEl = {
      style: {
        WebkitAnimation: 'foo'
      }
    };

    expect(DOM.getAnimationEvent(fakeEl)).toBe('webkitAnimationEnd');
    expect(DOM.getAnimationEvent()).toBe('webkitAnimationEnd');
  });
});

describe('Show/hide', () => {
  test('Show removes the display property', () => {
    const el = DOM.createNode('div');
    el.style.display = 'flex';

    expect(el.style.display).toBe('flex');
    DOM.show(el);
    expect(el.style.display).toBe('');
  });

  test('Hide adds display none', () => {
    const el = DOM.createNode('div');

    expect(el.style.display).toBe('');
    DOM.hide(el);
    expect(el.style.display).toBe('none');
  });

  test('Is visible', () => {
    // offsetParent doesn't work nice with JSDom
    const el = DOM.createNode('div');
    let offsetParent = document.body;
    el.style.display = 'block';

    document.body.appendChild(el);
    Object.defineProperty(el, 'offsetParent', {get: () => offsetParent});
    expect(DOM.isVisible(el)).toBe(true);

    DOM.hide(el);
    offsetParent = null;

    expect(DOM.isVisible(el)).toBe(false);
    document.body.removeChild(el);
  });
});

describe('Custom Event', () => {
  test('Event gets fired', () => {
    const cb = jest.fn();
    const el = DOM.createNode('div');

    el.addEventListener('foo', cb);
    DOM.fireEvent(el, 'foo');
    expect(cb).toHaveBeenCalled();
  });

  test('Event can pass data', () => {
    const cb = jest.fn();
    const el = DOM.createNode('div');

    el.addEventListener('foo', cb);
    DOM.fireEvent(el, 'foo', {
      foo: 'bar'
    });
    expect(cb.mock.calls[0][0].detail.foo).toBe('bar');
  });
});

describe('To Array', () => {
  test('Converts to array', () => {
    document.body.innerHTML = '<p></p><p></p><p></p><p></p><p></p>';
    const paragraphs = document.querySelectorAll('p');

    expect(paragraphs.length).toBe(5);
    expect(paragraphs).not.toBeInstanceOf(Array);
    expect(DOM.toArray(paragraphs)).toBeInstanceOf(Array);
    expect(DOM.toArray(paragraphs).length).toBe(5);

    document.body.innerHTML = '';
  });
});

describe('Focusable Element', () => {
  beforeEach(() => {
    document.body.innerHTML = `      
      <p id="noContent" tabindex="0"></p>
      <input id="input" type="text">
      <select id="select">
        <option id="option1"></option>
        <option id="option2"></option>
      </select>
      <textarea id="textarea"></textarea>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('Returns false if not focusable', () => {
    document.getElementById('noContent').focus();
    expect(DOM.isFocusableElement()).toBe(false);
  });

  test('Returns true if focusable', () => {
    document.getElementById('noContent').focus();
    expect(DOM.isFocusableElement()).toBe(false);
    document.getElementById('input').focus();
    expect(DOM.isFocusableElement()).toBe(true);
    document.getElementById('noContent').focus();
    expect(DOM.isFocusableElement()).toBe(false);
    document.getElementById('select').focus();
    expect(DOM.isFocusableElement()).toBe(true);
    document.getElementById('noContent').focus();
    expect(DOM.isFocusableElement()).toBe(false);
    document.getElementById('textarea').focus();
    expect(DOM.isFocusableElement()).toBe(true);
  });
});

describe('Parse size', () => {
  test('Parses a css string to number', () => {
    expect(DOM.parseSize('10px')).toBe(10);
  });
});

describe('After', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  beforeEach(() => {
    document.body.innerHTML = '<div id="content">' +
        '<div id="1"></div>' +
        '<div id="2"></div>' +
        '<div id="3"></div>' +
      '</div>';
  });

  test('Inserts node after target', () => {
    const content = document.getElementById('content');
    const lastDiv = document.getElementById('3');
    const secondDiv = document.getElementById('2');

    DOM.after(secondDiv, lastDiv);
    expect(content.innerHTML)
        .toBe('<div id="1"></div><div id="3"></div><div id="2"></div>');
    DOM.after(secondDiv, lastDiv);
    expect(content.innerHTML)
      .toBe('<div id="1"></div><div id="3"></div><div id="2"></div>');
  });
});


