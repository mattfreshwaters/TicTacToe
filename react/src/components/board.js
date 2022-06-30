import Square from "./square";
import React from "react";
import "../css/index.css";

class Board extends React.Component {

    constructor(props){
        super(props)
        console.log(props.size)

        this.state = {
            count: 0,
            boardSize:props.size
        }
    }
   
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        position={i}
      />
    );
  }

  render() {
    //const boardSize = this.props.size;
    const rows = Array.from(Array(this.state.boardSize).keys())
    const columns = Array.from(Array(this.state.boardSize).keys())

    return (
    	<div className="board">
      {
      	rows.map( (row) => {
				 return <div key={row} className="board-row">
            {
            	rows.map( (col) => {
          			return this.renderSquare((3*row)+col)
          		})
            }
            </div>

      	})
      }
      </div>
    )
  }
}

export default Board;


/*
{ <div className="board-row">
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
        </div> }


          /*

var index = parseInt(prompt('Numeric Index'));
var row = Math.floor(index / 5) + 1;
var col = index % 5;

alert('[ ' + col + ', ' + row + ' ]'); 
  */
