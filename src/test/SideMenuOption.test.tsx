import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import SideMenuOption from '../components/sideMenu/sideMenuOption/SideMenuOption'; // Adjust the import path as necessary
import {  menuOptions } from '../constants/menuOptions';

// Mock IMenuOptions for testing

// Mock useNavigate
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
  }));
  
describe('SideMenuOption Component', () => {
  it('renders with correct text', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <SideMenuOption option={menuOptions[0]} />
      </MemoryRouter>
    );

    expect(screen.getByText('Rock Paper Scissors')).toBeInTheDocument();
  });

  it('applies selected class when current path matches option key', () => {
    render(
      <MemoryRouter initialEntries={['/rock-paper-scissors']}>
        <SideMenuOption option={menuOptions[0]} />
      </MemoryRouter>
    );

    const menuOption = screen.getByTestId(`side-menu-option-${menuOptions[0].key}`);
    expect(menuOption).toHaveClass('selected');
  });

  it('does not apply selected class when current path does not match option key', () => {
    render(
      <MemoryRouter initialEntries={['/tic-tac-toe']}>
        <SideMenuOption option={menuOptions[0]} />
      </MemoryRouter>
    );

    const menuOption = screen.getByTestId(`side-menu-option-${menuOptions[0].key}`);
    expect(menuOption).not.toHaveClass('selected');
  });

  it('navigates to the correct path on click', () => {
    const navigate = jest.fn();
    jest.mocked(useNavigate).mockReturnValue(navigate);

    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route
            path="*"
            element={<SideMenuOption option={menuOptions[0]} />}
          />
        </Routes>
      </MemoryRouter>
    );

    const menuOption = screen.getByTestId(`side-menu-option-${menuOptions[0].key}`);
    fireEvent.click(menuOption);

    expect(navigate).toHaveBeenCalledWith(menuOptions[0].path);
  });
});
