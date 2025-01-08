import  { useState } from 'react';
import './App.css'
import SelectedChallenge from './components/selectedChallenge/SelectedChallenge'
import SideMenu from './components/sideMenu/SideMenu'
import { menuOptions } from './constants/menuOptions';

function App() {
    const [selectedOption, setSelectedOption] = useState<string>(menuOptions[0].key);

    const handleSelectedOption = (name: string) => {
        setSelectedOption(name);
    }
    
  return (
    <div className='App'>
      <SideMenu  selectedOptionKey={selectedOption} handleSelectedOption={handleSelectedOption} />
      <SelectedChallenge selectedChallengeKey ={selectedOption}/>
    </div>
  )
}

export default App
