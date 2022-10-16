import "./App.css";
import { useEffect, useState } from "react";

const getRandomColor = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};

function App() {
  const [color, setColor] = useState("");
  const [choices, setChoices] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [numGuesses, setNumGuesses] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState(0);

  const updateGame = () => {
    const curColor = getRandomColor();
    setColor(curColor);
    setChoices(
      [curColor, getRandomColor(), getRandomColor()].sort(
        () => Math.random() - 0.5
      )
    );
  };

  const checkGuess = (guess) => {
    setNumGuesses(numGuesses + 1);
    if (guess === color) {
      setIsCorrect(true);
      setCorrectGuesses(correctGuesses + 1);
      updateGame();
    } else {
      setIsCorrect(false);
    }
  };

  useEffect(() => {
    updateGame();
  }, []);

  return (
    <div className="game">
      <div>
        <div className="title-text">Guess the Color!</div>
        <div className="to-guess" style={{ background: color }}></div>

        <div style={{ height: 5 }}></div>

        {choices.map((choice) => {
          return <button onClick={() => checkGuess(choice)}>{choice}</button>;
        })}

        <div className="guesses-stats">Total Guesses: {numGuesses}</div>
        <div className="guesses-stats">Correct Guesses: {correctGuesses}</div>

        {isCorrect === null && (
          <div className="start-text" style={{ color: color }}>
            What Color is This?
          </div>
        )}
        {isCorrect === false && <div className="wrong">Wrong, Try Again!</div>}
        {isCorrect === true && <div className="right">Right, Good Job!</div>}
      </div>
    </div>
  );
}

export default App;
