import { useMemo, useState } from "react"
import classNames from "classnames";
import EndgameMessage from "../endGameMessage/EndGameMessage";
import "./RockPaperScissors.scss"

const RockPaperScissors = () => {

    const [score, setScore] = useState({
        player: 0,
        opponent: 0
    });

    const [playerChoice, setPlayerChoice] = useState<number | null>(null);
    const [opponentChoice, setOpponentChoice] = useState<number | null>(null);

    const handleClick = (choice: number) => {
        setPlayerChoice(choice);
        const opponentChoice = Math.floor(Math.random() * 3);
        setOpponentChoice(opponentChoice);
    
        if (choice === opponentChoice) return;
    
        const winningConditions = [[0, 2],[1, 0],[2, 1]];
    
        const isPlayerWinner = winningConditions.some(
            ([player, opponent]) => player === choice && opponent === opponentChoice
        );
    
        setScore(prev => ({
            ...prev,
            player: prev.player + (isPlayerWinner ? 1 : 0),
            opponent: prev.opponent + (isPlayerWinner ? 0 : 1)
        }));
    };

    const opponentClassName = useMemo(()=> classNames({
        RockPaperScissors__opponent: true,
        "-rock": opponentChoice === 0,
        "-paper": opponentChoice === 1,
        "-scissors": opponentChoice === 2,
    }),[opponentChoice])


    return (  
        <div className="RockPaperScissors">
                <h2>
                    Rock Paper Scissors
                </h2>
                <div className="RockPaperScissors__game-board">
                    <div >
                        <h1>
                            opponent
                        </h1>
                        <div className="RockPaperScissors__button-wrapper">
                            <div className={opponentClassName}>
                                {opponentChoice === null && "-"}
                                {opponentChoice === 0 && "rock"}
                                {opponentChoice === 1 && "paper"}
                                {opponentChoice === 2 && "scissors"}
                                
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>VS</h1>
                        <h2>Score</h2>
                        <div>
                            <span>{score.opponent}:{score.player}</span>
                            <EndgameMessage playerChoice={playerChoice} opponentChoice={opponentChoice}/>
                        </div>
                    </div>
                    <div>
                        <h1>You</h1>

                        <div className="RockPaperScissors__button-wrapper">
                            <button className="RockPaperScissors__player" onClick={() => handleClick(0)}>
                                rock
                            </button>
                            <button  className="RockPaperScissors__player" onClick={() => handleClick(1)}>
                                paper
                            </button>
                            <button  className="RockPaperScissors__player" onClick={() => handleClick(2)}>
                                scissors
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    );
}
 
export default RockPaperScissors;