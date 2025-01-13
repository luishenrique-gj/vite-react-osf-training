import classNames from "classnames";
import { IMenuOptions } from "../../../constants/menuOptions";
import './SideMenuOption.scss';
import { useLocation, useNavigate } from "react-router-dom";

interface SideMenuOptionProps {
    option:IMenuOptions,
}

const SideMenuOption = ({option}: SideMenuOptionProps) => {
    
    const location = useLocation();
    const navigate = useNavigate();

    const currentPath = location.pathname.split('/').pop();

    const handleRedirectToRoute = () => {
        navigate(option.path);
    };

    const optionsClassName = classNames({
        SideMenuOption: true,
        selected: currentPath === option.key
    });

    return (
        <div className={optionsClassName} onClick={handleRedirectToRoute}>
            {option.name}
        </div>
    );
}
 
export default SideMenuOption;