import { IMenuOptions } from "../../../constants/menuOptions";

interface SideMenuOptionProps {
    option:IMenuOptions
    handleClick: (name: string) => void;
}

const SideMenuOption = ({option, handleClick}: SideMenuOptionProps) => {
    return ( 
    <div onClick={()=>handleClick(option.key)}>
        {option.name}
    </div>
     );
}
 
export default SideMenuOption;