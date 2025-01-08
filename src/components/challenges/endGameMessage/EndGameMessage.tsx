import "./EndGameMessage.css";


interface EndgameMessageProps {
    case: number | null;
}

const EndgameMessage = ({ case: gameCase }: EndgameMessageProps) => {
    return ( 
        <div className="EndgameMessage">
            {gameCase === 1 && <p>It's a draw!</p>}
            {gameCase === 2 && <p>You won!</p>}
            {gameCase === 3 && <p>You lost!</p>}
        </div> 
    );
}

export default EndgameMessage;