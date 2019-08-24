export function createElement(tag, id, className, text) {
  const element = document.createElement(tag);
  element.id = id || '';
  element.className = className || '';
  element.innerText = text || '';
  return element;
}

export function TOMANOCU() {
}
