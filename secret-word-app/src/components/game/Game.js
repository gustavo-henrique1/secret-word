import "./Game.css";

const Game = ({ verifyLetter }) => {
  return (
    // <div>
    //   <button onClick={verifyLetter}>Jogar</button>
    // </div>
    <div className="game">
      <p className="points">
        <span>Pontuação: 000</span>
      </p>
    </div>
  );
};

export default Game;
