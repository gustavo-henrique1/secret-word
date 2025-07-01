// css
import "./App.css";

// react
import { useCallback, useEffect, useState } from "react";

// data
import { wordsList } from "./data/words";

// components
import Start from "./components/start/Start";
import Game from "./components/game/Game";
import End from "./components/end/End";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState();
  const [pickedCategory, setPickedCategory] = useState();
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = () => {
    // pick a random category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // pick a random words

    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };

  // start game
  const startGame = () => {
    const { word, category } = pickWordAndCategory();
    let wordLetters = word.split("").map((l) => l.toLowerCase());

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  //  letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  // restart game
  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <Start startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <End retry={retry} />}
    </div>
  );
}

export default App;
