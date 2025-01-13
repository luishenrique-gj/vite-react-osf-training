import RockPaperScissors from "../components/challenges/rockPaperScissors/RockPaperScissors";
import TicTacToe from "../components/challenges/rockPaperScissors/TicTacToe";
import { menuKeys } from "./menuOptions";

export const challengeList = [
    { key: menuKeys.RockPaperScissors, component: RockPaperScissors, path: "/rock-paper-scissors" },
    {key: "tic-tac-toe", component:TicTacToe , path: "/tic-tac-toe"}
];