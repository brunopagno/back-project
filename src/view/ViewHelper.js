export function createElement(tag, id, className, text) {
  const element = document.createElement(tag);
  element.id = id || '';
  element.className = className || '';
  element.innerText = text || '';
  return element;
}

export function createImage(className, src) {
  const element = document.createElement('img');
  element.className = className || '';
  element.src = src || '';
  return element;
}

export function createButton(text, onclick) {
  const element = document.createElement('div');
  element.className = 'button';
  element.innerText = text;
  element.onclick = onclick;
  return element;
}

export function createMessage(text) {
  const element = document.createElement('div');
  element.className = 'message';
  element.innerText = text;
  return element;
}
