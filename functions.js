export function capitalize(word) {
  return !word.length
    ? ""
    : `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`;
}

export function reverse(word) {
  return !word.length ? "" : Array.from(word).reverse().join("");
}

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

function makeLettersArr() {
  const letters = {
    lower: [],
    upper: [],
  };

  let letter = "a";
  do {
    letters.lower.push(letter);
    letters.upper.push(letter.toUpperCase());

    letter = String.fromCharCode(letter.charCodeAt() + 1);
  } while (letter <= "z");

  return letters;
}

export function caesarCipher(word, shift) {
  const alphabet = makeLettersArr();

  let newWord = "";
  for (let i = 0; i < word.length; i++) {
    let letter = word.charAt(i);
    let newLetter;

    if (alphabet.lower.includes(letter)) {
      newLetter = alphabet.lower[(alphabet.lower.indexOf(letter) + shift) % 26];
    } else if (alphabet.upper.includes(letter)) {
      newLetter = alphabet.upper[(alphabet.upper.indexOf(letter) + shift) % 26];
    } else {
      newLetter = letter;
    }

    newWord += newLetter;
  }

  return newWord;
}

export function analyzeArray(arr) {
  if (!arr.length) return null;

  return {
    average: arr.reduce((acum, value) => acum + value, 0) / arr.length,
    min: arr.reduce((min, value) => (min > value ? value : min), Infinity),
    max: arr.reduce((max, value) => (max < value ? value : max), -Infinity),
    length: arr.length,
  };
}
