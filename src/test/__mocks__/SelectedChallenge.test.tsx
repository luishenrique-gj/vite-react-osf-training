import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SelectedChallenge from '../../components/selectedChallenge/SelectedChallenge';
import { menuOptions } from '../../constants/menuOptions';

describe('SelectedChallenge', () => {
  it('renders correctly when no challenge is selected', () => {
    const { getByText, queryByText } = render(<SelectedChallenge selectedChallengeKey={""} />);
    
    const element = getByText("Selected Challenge");
    expect(element).toBeInTheDocument();

    menuOptions.forEach((option) => {
      const optionElement = queryByText(option.name);
      expect(optionElement).not.toBeInTheDocument();
    });
  });

  it('renders correctly the selected challenge', () => {
    const { getByText } = render(<SelectedChallenge selectedChallengeKey={menuOptions[0].key} />);
    
    const element = getByText("Rock Paper Scissors");
    expect(element).toBeInTheDocument();
  });
});