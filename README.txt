0. Initialize variables - guess(""), solution(""), guessCount(0), isExploding("false"), gameState(false)
1. pick a word out of the list - file words.js : solution 
    - use a random generator to determine the word from the list 
    - setSolution(word[randomNumber])
    - setGameState(true)
2. On Click Button 
    - as this is a simplified version input will be run as it is (nu matter letter/number/too long or too short)
    1. take the input from the input box on click button : guess 
    2. put the new guess into the guessArray[] to store the history of guesses
    3. if (guessCount < 5)
        - guessCount++;
        - run the guess through the verification process - validateGuess
        - use two arrays to set up the number of each letters per both guess and solution (to track duplicates in guesses)
        - if guess == solution / isExploding == true / set result [2, 2, 2, 2, 2] 
                               / setMessage("Congratulations you have won!) / -> run function that resets all variables / return 
        - else if guess != solution / run an algorythm to set up the result[] 
    
    4. display the guess with the right color boxes 
        - use the result[] to set up the colors of the boxes      
    5. if guessCount == 5 / setMessage("No more guesses! better luck next time!") / -> run function that resets all variables / return 


