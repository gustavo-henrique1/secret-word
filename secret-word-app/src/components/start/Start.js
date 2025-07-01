import "./Start.css";

function Start({ startGame }) {
  return (
    <div className="start">
      <div className="start-title">
        <h1>
          <span>Secret</span> Word
        </h1>
        <p>Clique no botão abaixo para começar a jogar</p>
      </div>
      <button onClick={startGame}>Jogar</button>
    </div>
  );
}

export default Start;
