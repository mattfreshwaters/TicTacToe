

function Moves(props){

    const history = props.history

    const moves = history.map((step, move)=>{
        const desc = move ? 
        'Go to move #' + move : 'Go to game start'

        return(
            <li className="history">
                <button onClick={() => props.onClick(move)}>{desc}</button>
            </li>
        )
      })

      return(
        <ol className="moves">{moves}</ol>
      )

}

export default Moves