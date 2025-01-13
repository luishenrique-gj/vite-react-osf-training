import { useMemo } from "react";
import "./EndGameMessage.css";


interface EndgameMessageProps {
    playerChoice: number | null;
    opponentChoice:number | null;
}

const EndgameMessage = ({ playerChoice: playerChoice, opponentChoice:opponentChoice}: EndgameMessageProps) => {

    const endGameCase = useMemo(() => {
        const winningConditions = [[0, 2], [1, 0], [2, 1]];
        const isPlayerWinner = winningConditions.some(
            ([player, opponent]) => player === playerChoice && opponent === opponentChoice
        );

        if(playerChoice === null || opponentChoice === null) {
            return null;
        }
    
        if (playerChoice === opponentChoice) {
            return "It's a draw!";
        }
    
        return isPlayerWinner ? 'You won!' : 'You lost!';
    }, [playerChoice, opponentChoice]);

    return ( 
        <div className="EndgameMessage">
                {endGameCase}
        </div> 
    );
}

export default EndgameMessage;