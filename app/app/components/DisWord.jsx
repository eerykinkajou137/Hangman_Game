// components/DisWord.js
"use client";

import { useEffect, useState } from "react";
import { makePuzzle } from "../logicsss/puzzle";

export function DisWordBlock() {
  const [puzzle, setPuzzle] = useState(null);

  useEffect(() => {
    async function loadPuzzle() {
      const result = await makePuzzle();
      setPuzzle(result);
    }

    loadPuzzle();
  }, []); // runs only once when component mounts

  return (
    <div>
      {puzzle ? (
        <>
          <p>Question: {puzzle.question.join("")}</p>
          <p>Guesses: {puzzle.guesses.join(", ")}</p>
        </>
      ) : (
        <p>Loading puzzle...</p>
      )}
    </div>
  );
}
