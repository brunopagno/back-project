export function sample(list) {
  return list[Math.floor(Math.random() * list.length)];
}

export function sampleFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomCard(cards) {
  return sample(Object.values(cards));
}
