import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import EndgameMessage from '../components/challenges/rockPaperScissors/EndGameMessage';

describe('EndgameMessage', () => {
  it('renders correctly for a draw', () => {
    const { getByText } = render(<EndgameMessage case={1} />);
    const element = getByText("It's a draw!");
    
    expect(element).toBeInTheDocument();
  });

  it('renders correctly for a win', () => {
    const { getByText } = render(<EndgameMessage case={2} />);
    const element = getByText("Congratulations! You won!");

    expect(element).toBeInTheDocument();
  });

  it('renders correctly for a loss', () => {
    const { getByText } = render(<EndgameMessage case={3} />);
    const element = getByText("Sorry! You lost!");
    
    expect(element).toBeInTheDocument();
  });
});