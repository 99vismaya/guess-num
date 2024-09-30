import React, { useState } from 'react';

const GuessNumberGame = () => {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    const guessedNumber = parseInt(guess, 10);

    if (isNaN(guessedNumber)) {
      setMessage('Please enter a valid number');
    } else if (guessedNumber < targetNumber) {
      setMessage('Too low! Try again.');
    } else if (guessedNumber > targetNumber) {
      setMessage('Too high! Try again.');
    } else {
      setMessage('Congratulations! You guessed the number!');
    }
  };

  const handleReset = () => {
    setTargetNumber(generateRandomNumber());
    setGuess('');
    setMessage('');
  };

  return (
    <>
    <div>
      <h1>Guess the Number</h1>
      <form onSubmit={handleGuessSubmit}>
        <input
          type="number"
          value={guess}
          onChange={handleGuessChange}
          placeholder="Enter your guess"
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
      <button onClick={handleReset}>Reset Game</button>
    </div>
    
    </>
  );
};

export default GuessNumberGame;