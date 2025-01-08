import  { useState } from 'react';
import './App.css'
import SelectedChallenge from './components/selectedChallenge/SelectedChallenge'
import SideMenu from './components/sideMenu/SideMenu'

function App() {
    const [selectedOption, setSelectedOption] = useState<string>("");

    const handleSelectedOption = (name: string) => {
        setSelectedOption(name);
    }
    
  return (
    <div className='App'>
      <SideMenu handleSelectedOption={handleSelectedOption} />
      <SelectedChallenge selectedChallengeKey ={selectedOption}/>
    </div>
  )
}

export default App
