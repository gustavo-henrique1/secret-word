import "./End.css";

function End({ retry }) {
  return (
    <div>
      <button onClick={retry}>Recomeçar</button>
    </div>
  );
}

export default End;
