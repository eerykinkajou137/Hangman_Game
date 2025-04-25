import { fetcWord } from "./fetch";

const word = fetcWord(); // source
const numOfLetters = word.length;

// Remove a few letters into the word to make the guessing fair

let gaps = Math.floor(Math.random() * numOfLetters);
let pos = []; //positions of the gaps

for (let i = 0; i < gaps; i++) {
  let random;

  // Keep generating a new number until it's not already in pos
  do {
    random = Math.floor(Math.random() * numOfLetters);
  } while (pos.includes(random));

  pos.push(random);
}

// Puzzle

// determine the correct guesses
let guesses = [];
let question = word;

for (let y = 0; y < pos.length; y++) {
  guesses.push(word[pos[y]]);
  question.pos[y] = "-"; // note this is still in array format
}
