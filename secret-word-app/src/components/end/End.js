import "./End.css";

function End({ retry, score }) {
  return (
    <div className="end">
      <h1>
        Game <span>Over</span>
      </h1>
      <h2>
        Sua pontuação foi: <span>{score}</span>
      </h2>
      <button onClick={retry}>Recomeçar</button>
    </div>
  );
}

export default End;
