import { menuOptions } from "../../constants/menuOptions";
import SideMenuOption from "./sideMenuOption/SideMenuOption";
import "./sideMenu.scss";

interface props {
    handleSelectedOption: (option:string) => void;
    selectedOptionKey:string
}

const SideMenu = ({handleSelectedOption, selectedOptionKey}:props) => {

    return ( 
        <div className='SideMenu'>
            <div>
                <h2>Available Challenges</h2>
                <h3>select a challenge</h3>
            </div>
            <div className="SideMenu__options-wrapper">
                {menuOptions.map((option) => (
                    <SideMenuOption  selectedOptionKey={selectedOptionKey} key={option.key} option={option} handleClick={handleSelectedOption} />
                ))}
            </div>
        </div>
     );
}
 
export default SideMenu;