import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import RockPaperScissors from '../components/challenges/rockPaperScissors/RockPaperScissors';

describe('RockPaperScissors Component', () => {
    
  it('renders the game board correctly', () => {
    render(<RockPaperScissors />);

    expect(screen.getByText('Rock Paper Scissors')).toBeInTheDocument();
    expect(screen.getByText('opponent')).toBeInTheDocument();
    expect(screen.getByText('VS')).toBeInTheDocument();
    expect(screen.getByText('You')).toBeInTheDocument();
    expect(screen.getByText('Score')).toBeInTheDocument();

    expect(screen.getByText('rock')).toBeInTheDocument();
    expect(screen.getByText('paper')).toBeInTheDocument();
    expect(screen.getByText('scissors')).toBeInTheDocument();
  });

  it('updates the opponent choice randomly', async () => {
   const {container} = render(<RockPaperScissors />);

    fireEvent.click(screen.getByText('rock'));

    await waitFor(() => {
        const element = container.querySelector('.RockPaperScissors__opponent');
      expect(element).toHaveTextContent(/rock|paper|scissors/);
    });
  });


  it('updates the score correctly when the player wins', async () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
    render(<RockPaperScissors />);

    fireEvent.click(screen.getByText('scissors'));
    await waitFor(() => {
      expect(screen.getByText('0:1')).toBeInTheDocument(); 
    });

  });

  it('updates the text correctly when the player wins', async () => {
  
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);

    render(<RockPaperScissors />);

    fireEvent.click(screen.getByText('scissors'));

    await waitFor(() => {
      expect(screen.getByText('You won!')).toBeInTheDocument(); 
    });
  });

  it('updates the score correctly when the opponent wins', async () => {
      
      render(<RockPaperScissors />);
      
      jest.spyOn(global.Math, 'random').mockReturnValue(0.9);
      fireEvent.click(screen.getByText('paper'));
      
      await waitFor(() => {
      expect(screen.getByText('1:0')).toBeInTheDocument(); 
    });
  });

  it('updates the text correctly when the opponent wins', async () => {
      
    render(<RockPaperScissors />);
    
    jest.spyOn(global.Math, 'random').mockReturnValue(0.9);
    fireEvent.click(screen.getByText('paper'));
    
    await waitFor(() => {
    expect(screen.getByText('You lost!')).toBeInTheDocument(); 
     });
});

  it('handles a tie correctly', async () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0); 

    render(<RockPaperScissors />);

    fireEvent.click(screen.getByText('rock'));

  
  });

  it('Player chooses paper, opponent chooses rock: Player wins', async () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0);

    render(<RockPaperScissors />);

    fireEvent.click(screen.getByText('paper'));

    await waitFor(() => {
      expect(screen.getByText('You won!')).toBeInTheDocument();
    });
  });

  it('Player chooses rock, opponent chooses scissors: Player wins', async () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.9);

    render(<RockPaperScissors />);

    fireEvent.click(screen.getByText('rock'));

    await waitFor(() => {
      expect(screen.getByText('You won!')).toBeInTheDocument();
    });
  });

  it('Player chooses scissors, opponent chooses paper: Player wins', async () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);

    render(<RockPaperScissors />);

    fireEvent.click(screen.getByText('scissors'));

    await waitFor(() => {
      expect(screen.getByText('You won!')).toBeInTheDocument();
    });
  });

});
