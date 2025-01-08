import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { menuOptions } from '../constants/menuOptions';
import SideMenu from '../components/sideMenu/SideMenu';

describe('SideMenu Component', () => {
  it('renders text correctly', () => {
    render(<SideMenu handleSelectedOption={() => {}} />);

    expect(screen.getByText('Available Challenges')).toBeInTheDocument();
    expect(screen.getByText('select a challenge')).toBeInTheDocument();
  });

  it('renders all available options', () => {
    render(<SideMenu handleSelectedOption={() => {}} />);

    menuOptions.forEach(option => {
      expect(screen.getByText(option.name)).toBeInTheDocument();
    });
  });

  it('calls handleSelectedOption with the correct option when an option is clicked', () => {
    const mockHandleSelectedOption = jest.fn();
    render(<SideMenu handleSelectedOption={mockHandleSelectedOption} />);

    menuOptions.forEach(option => {
      const optionElement = screen.getByText(option.name);
      fireEvent.click(optionElement);
      expect(mockHandleSelectedOption).toHaveBeenCalledWith(option.key);
    });
  });
});