import { useEffect, useMemo, useState } from "react"
import "./RockPaperScissors.scss"
import classNames from "classnames";
import EndgameMessage from "../endGameMessage/EndGameMessage";

const RockPaperScissors = () => {

    const [score, setScore] = useState({
        player: 0,
        opponent: 0
    });

    const [playerChoice, setPlayerChoice] = useState<number | null>(null);
    const [opponentChoice, setOpponentChoice] = useState<number | null>(null);
    const [endGameCase, setEndGameCase] = useState<number | null>(null);

    const handleClick = (choice: number) => {
        setPlayerChoice(choice);
        setOpponentChoice(Math.floor(Math.random() * 3));
    }

    useEffect(()=>{
        if( playerChoice !== null && opponentChoice !== null ){
            if(playerChoice === opponentChoice ) {
                setEndGameCase(1)
                return;
            }
            if((playerChoice === 0 && opponentChoice === 2) ||
             (playerChoice === 1 && opponentChoice === 0) || 
             (playerChoice === 2 && opponentChoice === 1)) {
                setScore(prev =>({...prev, player: prev.player + 1}));
                setEndGameCase(2)
                return;
            } 
            setEndGameCase(3)
            setScore(prev =>({...prev, opponent: prev.opponent + 1}));
           
        }
    },[opponentChoice, playerChoice])

    const opponentClassName = useMemo(()=>classNames({
        RockPaperScissors__opponent: true,
        "RockPaperScissors__opponent-rock": opponentChoice === 0,
        "RockPaperScissors__opponent-paper": opponentChoice === 1,
        "RockPaperScissors__opponent-scissors": opponentChoice === 2,
    }),[opponentChoice])


    return (  
        <div className="RockPaperScissors">
                <h2>
                    Rock Paper Scissors
                </h2>
                <div className="RockPaperScissors__game-board">
                    <div>
                        <h1>
                            opponent
                        </h1>
                        <div className="RockPaperScissors__button-wrapper">
                            <div className={opponentClassName}>
                                {opponentChoice === 0 && "rock"}
                                {opponentChoice === 1 && "paper"}
                                {opponentChoice === 2 && "scissors"}
                                
                            </div>
                            {opponentChoice}
                        </div>
                    </div>
                    <div>
                        <h1>VS</h1>
                        <h2>Score</h2>
                        <div>
                            <span>{score.opponent}:{score.player}</span>
                            <EndgameMessage case={endGameCase}/>
                        </div>
                    </div>
                    <div>
                        <h1>You</h1>

                        <div className="RockPaperScissors__button-wrapper">
                            <button onClick={() => handleClick(0)}>
                                rock
                            </button>
                            <button onClick={() => handleClick(1)}>
                                paper
                            </button>
                            <button onClick={() => handleClick(2)}>
                                scissors
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    );
}
 
export default RockPaperScissors;