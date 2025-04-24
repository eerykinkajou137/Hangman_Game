import { fetcWord } from "./fetch";

const word = fetcWord();
const numOfLetters = word.length;
let letters = word.split("");

// Input a few letters into the word to make the guessing fair

let gaps = Math.floor(Math.random() * numOfLetters);

for (let i = 0; i < gaps; i++) {}
