import classNames from "classnames";
import { IMenuOptions } from "../../../constants/menuOptions";
import './SideMenuOption.scss';

interface SideMenuOptionProps {
    option:IMenuOptions,
    selectedOptionKey:string,
    handleClick: (name: string) => void,
}

const SideMenuOption = ({option,selectedOptionKey, handleClick}: SideMenuOptionProps) => {
    


    const optionsClassName= classNames({SideMenuOption: true, selected: selectedOptionKey === option.key})

    return ( 
    <div className={optionsClassName} onClick={()=>handleClick(option.key)}>
        {option.name}
    </div>
     );
}
 
export default SideMenuOption;