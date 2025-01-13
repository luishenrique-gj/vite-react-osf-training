import { menuOptions } from "../../constants/menuOptions";
import SideMenuOption from "./sideMenuOption/SideMenuOption";
import "./SideMenu.scss";

const SideMenu = () => {

    return ( 
        <div className='SideMenu'>
            <div>
                <h2>Available Challenges</h2>
                <h3>select a challenge</h3>
            </div>
            <div className="SideMenu__options-wrapper">
                {menuOptions.map((option) => (
                    <SideMenuOption  key={option.key} option={option} />
                ))}
            </div>
        </div>
     );
}
 
export default SideMenu;