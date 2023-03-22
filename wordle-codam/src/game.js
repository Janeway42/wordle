import { words } from "./words";
import { gameState} from "./App";
import { guess } from "./App";
import  solution from "./App";
import { isExploding } from "./App";

export const validateGuess = (guess) => {

    console.log("guess: " + guess);

    if (guess == solution)
    {
        validateGuess = [2, 2, 2, 2, 2];
        isExploding = true;
    }
    else
        validateGuess = runAlgorythm; // runAlgorythm would run the correct result[]
};
