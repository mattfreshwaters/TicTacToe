import React from "react";
import Board from "./board";
import Moves from "./moves";
import calculateWinner from "../service/calculateWinner";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      boardSize: 3,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const size = parseInt(event.target.value);
    event.target.value === 0 ? this.setState({ boardSize: 3 }) : this.setState({ boardSize: size });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  newGame() {
    this.setState({
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares, this.state.boardSize);

    let status;
    if (this.state.stepNumber <= 9) {
      if (winner) {
        status = "Winner: " + winner;
      } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }
    } else {
      status = "Cat's game";
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            size={this.state.boardSize}
            currentBox={0}
          />
        </div>
        <div className="game-info">
          <form onSubmit={this.handleSubmit}>
              <input
                type="number"
                max="12"
                min="3"
                placeholder="3"
                value={this.state.value}
                onChange={this.handleChange}
              />
          </form>
          <div>{status}</div>
          <Moves history={history} onClick={(i) => this.jumpTo(i)} />
          <div className="new-game">
            <button className="play" onClick={() => this.newGame()}>
              New Game
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
