import test from 'ava';
import DOM from '../src/js/utils/dom';

test('DOM.createNode', t => {
	const div = DOM.createNode('div', 'my-id');
  t.is(div.tagName, 'DIV');
  t.is(div.id, 'my-id');
  t.is(div.innerHTML, '');
});

test('DOM.once', t => {
	const div = DOM.createNode('div');
  DOM.once(div, 'click', () => div.classList.toggle('ok'));
  div.click();
  t.is(div.className, 'ok');
  div.click();
  t.is(div.className, 'ok');
});

test('DOM.hide', t => {
	const div = DOM.createNode('div');
  DOM.hide(div);
  t.is(div.style.display, 'none');
});

test('DOM.show', t => {
	const div = DOM.createNode('div');
  DOM.hide(div);
  DOM.show(div);
  t.is(div.style.display, '');
});

test('DOM.fireEvent', t => {
	const div = DOM.createNode('div');
  div.addEventListener('toggle-class', () => div.classList.toggle('ok'));
  DOM.fireEvent(div, 'toggle-class');
  t.is(div.className, 'ok');
  DOM.fireEvent(div, 'toggle-class');
  t.is(div.className, '');
});
