import { menuOptions } from "../../constants/menuOptions";
import SideMenuOption from "./sideMenuOption/SideMenuOption";
import "./sideMenu.css";

interface props {
    handleSelectedOption: (option:string) => void;
}

const SideMenu = ({handleSelectedOption}:props) => {

    return ( 
        <div className='SideMenu'>
            <div>
                <h2>Available Challenges</h2>
                <h3>select a challenge</h3>
            </div>
            {menuOptions.map((option) => (
                <SideMenuOption key={option.key} option={option} handleClick={handleSelectedOption} />
            ))}
        </div>
     );
}
 
export default SideMenu;