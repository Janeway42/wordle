import "./styles.css";

import React, { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

import { GuessButton } from "./GuessButton";
import { Answer } from "./Answer";
import { Input } from "./Input";
import { validateGuess } from "./game";
import { words } from "./words";
import { guesses } from "./GuessButton";

export default function App() {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [guessArray, setGuessArray] = useState([]);
  const [isExploding, setIsExploding] = useState(false);
  const [guesses, setGuesses] = useState(0);
  var gameState = false;
  var solution = "";

  // step 1 choose a word out of words.js
  useEffect(() => {
      if (gameState == false){
        let number = Math.floor(Math.random() * 10);
        console.log(words[number]);
        solution = words[number];
        console.log(solution);
        gameState = true; // - so that it doesn't pick a new word at every guess
        console.log(gameState);
      }
    }    
  ,[]);

  // step 2 get first input 
  //        run it through validation 

  const onClick = () => {
    const currentGuess = { guess: guess, result: validateGuess };
     // const currentGuess = { guess: "CAKES", result: [0, 1, 2, 0, 1] };
    setGuessArray([...guessArray, currentGuess]);
    setGuesses(guess + 1);
    if (guesses < 5)
    {
      if (validateGuess == [2, 2, 2, 2, 2])
      {
        setIsExploding(true);
        setMessage("Congratulations! Start new game!");
        gameState = false;
        // clear GuessArray[]
        setGuesses(0);
      }
      else if (guesses == 4)
      {
        setMessage("Used up all guesses! Better luck next time! Start a new game");
        setGuesses(0);
        // clear GuessArray[]
        gameState = false;
      }
      else 
        setMessage("");
      console.log("run: " + guesses);
    }
  };
  const updateInput = (event) => {
    setGuess(event.target.value);
  };

  return (
    <div className="App" style={styles.container}>
      {isExploding && <ConfettiExplosion />}
      <h3>
        A simplified version of the game{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.nytimes.com/games/wordle/index.html"
        >
          wordle
        </a>
      </h3>

      {guessArray[guesses] && (
        <Answer attempt={guessArray[guesses].guess} result={guessArray[guesses].result} />
      )}


      <Input onChange={updateInput} />
      <GuessButton onClick={onClick} />
      <h3>{message}</h3>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};
