import use_Tic_Tac_Toe from "../hooks/use-Tic-Tac-Toe";
function Tic_Tac_Toe() {
  const { board, handleClick, calculateWinner, getStatusMessage, resetGame } =
    use_Tic_Tac_Toe();
  console.log(board);
  return (
    <div className="game">
      <h1>TIC TAC TOE</h1>
      <div className="status">
        {getStatusMessage()}
        <button className="reset" onClick={resetGame}>
          Reset
        </button>
      </div>
      <div className="Board">
        {board.map((b, index) => {
          return (
            <button
              key={index}
              className="cell"
              onClick={() => {
                handleClick(index);
              }}
              disabled={b !== null}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Tic_Tac_Toe;
