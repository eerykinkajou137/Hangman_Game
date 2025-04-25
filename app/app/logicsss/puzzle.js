import { fetchWord } from "./fetch.js";

export async function makePuzzle() {
  let res = await fetchWord(); // Ensure fetchWord() returns a string
  console.log(res);
  const word = await res[0].split(""); // the response is an array, since it only returns one value 0 is indexed aka i am lazy

  console.log(word);
  const numOfLetters = word.length;

  const gaps = Math.floor(Math.random() * numOfLetters);
  const pos = [];

  while (pos.length < gaps) {
    const random = Math.floor(Math.random() * numOfLetters);
    if (!pos.includes(random)) pos.push(random);
  }

  const guesses = [];
  const question = [...word];
  const ans = [];

  for (let i = 0; i < pos.length; i++) {
    guesses.push(word[pos[i]]);
    question[pos[i]] = "-";
    ans.push(word[pos[i]]);
  }

  return {
    guesses,
    question,
    ans,
  };
}
