import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import EndgameMessage from '../components/challenges/endGameMessage/EndGameMessage';

describe('EndgameMessage', () => {
  it('renders correctly for a draw', () => {
    const { getByText } = render(<EndgameMessage playerChoice={1} opponentChoice={1} />);
    const element = getByText("It's a draw!");
    
    expect(element).toBeInTheDocument();
  });

  it('renders correctly for a win', () => {
    const { getByText } = render(<EndgameMessage playerChoice={0} opponentChoice={2} />);
    const element = getByText("You won!");

    expect(element).toBeInTheDocument();
  });

  it('renders correctly for a loss', () => {
    const { getByText } = render(<EndgameMessage playerChoice={1} opponentChoice={2} />);
    const element = getByText("You lost!");
    
    expect(element).toBeInTheDocument();
  });
});