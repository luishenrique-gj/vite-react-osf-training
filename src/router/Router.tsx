import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SideMenu from '../components/sideMenu/SideMenu';
import { menuOptions } from '../constants/menuOptions';
import { challengeList } from '../constants/challengeOptions';

const AppRouter = () => {

  return (
    <Router>
        <SideMenu/>
        <Routes>
            <Route path="/" element={<Navigate to={menuOptions[0].path} />} />
            {challengeList.map((challenge) => (
                <Route key ={challenge.key} path={challenge.path} element={challenge.component()} />
            ))}
        </Routes>
    </Router>
  );
};

export default AppRouter;
