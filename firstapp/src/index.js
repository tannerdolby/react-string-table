import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
//passing props
  render() {
    return (
      //event handler for Square component using onClick prop (setting state to 'X' if clicked)
      //className prop and onClick props on separate lines for readibility
      <button className="square"
      onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}
//adding a constructor to Board and setting the boards initial state
//to contain an array of 12 nulls corresponding to each square
class Board extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      squares: Array(12).fill(null),
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares})
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]}
    onClick={() => this.handleClick(i)} />;
  }
  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div className="board-row">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
