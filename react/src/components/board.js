import Square from './square'
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/index.css'

class Board extends React.Component {
    renderSquare(r, c) {
       
      return (
        <Square
          value={this.props.squares[r]}
          onClick={() => this.props.onClick(r)}
          position={r}
        />
      );
    }

    
  
    render() {
        // this creates a 3x3 board
        let arr = Array(3).fill().map(()=>Array(3).fill())
        console.log("arr: ", arr)



      return (
        <div className="board">
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

  export default Board