export function random() {
  return Math.random();
}

export function sample(list) {
  return list[Math.floor(Math.random() * list.length)];
}
