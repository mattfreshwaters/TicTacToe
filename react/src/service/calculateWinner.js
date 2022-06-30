function calculateWinner(squares, brdSize) {
  let boardSize = Math.pow(brdSize,2); 
  // different ways you can win in this method of tic tac toe, ONLY in a 3x3 mode
  const lines = [
    [0, 1, 2],
    [3, 4, 5],  
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // This needs to be altered so it scales with larger board sizes
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  let answers = [];
  const horizontalAnswers = (boardSize) => {
    let arr = [];
    for (let i = 0; i < boardSize; i++) { 
      if(i % brdSize == 0 && i != 0){
        answers.push(arr);
        arr = []
        arr.push(i)
      }else{
        arr.push(i)
      } 
    }
    answers.push(arr) 
  };
  const verticalAnswers = (boardSize) => {
    for (let i = 0; i < brdSize; i++) {
      let arr = [];
      let j = i;
      while (j < boardSize) {
        arr.push(j);
        j += brdSize;
      }
      answers.push(arr);
    }
  };
  const diagonalAnswers = (boardSize) => {
    let arr = []
    let i = 0;
    while(i < boardSize){
      arr.push(i)
      i+= brdSize+1;
    }
    answers.push(arr)
    i = brdSize - 1 
    arr = []
    while(i < boardSize){
      if(arr.length >= brdSize){
        break;
      }
      arr.push(i)
      i+= brdSize-1
      
    }
    answers.push(arr)
  }
  horizontalAnswers(boardSize);
  verticalAnswers(boardSize)
  diagonalAnswers(boardSize)

  return null;
}

export default calculateWinner;
