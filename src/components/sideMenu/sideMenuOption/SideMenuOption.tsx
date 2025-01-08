import { IMenuOptions } from "../../../constants/menuOptions";
import './SideMenuOption.scss';

interface SideMenuOptionProps {
    option:IMenuOptions
    handleClick: (name: string) => void;
}

const SideMenuOption = ({option, handleClick}: SideMenuOptionProps) => {
    
    return ( 
    <div className="SideMenuOption" onClick={()=>handleClick(option.key)}>
        {option.name}
    </div>
     );
}
 
export default SideMenuOption;