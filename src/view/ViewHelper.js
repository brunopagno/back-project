export function createElement(tag, id, className, text) {
  const element = document.createElement(tag);
  element.id = id || '';
  element.className = className || '';
  element.innerText = text || '';
  return element;
}

export function createImage(id, className, src) {
  const element = document.createElement('img');
  element.id = id || '';
  element.className = className || '';
  element.src = src || '';
  return element;
}

export function createButton(id, className, text, onclick) {
  const element = document.createElement('div');
  element.id = id || '';
  element.className = className || '';
  element.innerText = text;
  element.onclick = onclick;
  return element;
}
