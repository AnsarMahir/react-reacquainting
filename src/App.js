import {useState} from 'react';

export default function Board() {
  const [square,setSquare] = useState(Array(9).fill(null));

  function handleClick(i){
    const nextSquares = square.slice();
    nextSquares[i] = "x";
    setSquare(nextSquares);
  }

  return (
  <>
  <div className="board-row">
  <Square value={square[0]} onSquareClick={() => handleClick(0)}/>
  <Square value={square[1]} onSquareClick={() => handleClick(1)}/>
  <Square value={square[2]} onSquareClick={() => handleClick(2)}/>
  </div>
  <div className="board-row">
  <Square value={square[3]} onSquareClick={() => handleClick(3)}/>
  <Square value={square[4]} onSquareClick={() => handleClick(4)}/>
  <Square value={square[5]} onSquareClick={() => handleClick(5)}/>
  </div>
  <div className="board-row">
  <Square value={square[6]} onSquareClick={() => handleClick(6)}/>
  <Square value={square[7]} onSquareClick={() => handleClick(7)}/>
  <Square value={square[8]} onSquareClick={() => handleClick(8)}/>
  </div>
  </>)
}

function Square({value, onSquareClick}){

 return <button onClick={onSquareClick} className="square">{value}</button>

}
