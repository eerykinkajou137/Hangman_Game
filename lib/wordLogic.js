import { fetcWord } from "./fetch";

const word = fetcWord();
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
