import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { menuOptions } from '../constants/menuOptions';
import SideMenu from '../components/sideMenu/SideMenu';
import {  StaticRouter } from 'react-router-dom';

describe('SideMenu Component', () => {

  it('renders text correctly', () => {
    render(
        <StaticRouter location='/'>
            <SideMenu />
        </StaticRouter>
    );

    expect(screen.getByText('Available Challenges')).toBeInTheDocument();
    expect(screen.getByText('select a challenge')).toBeInTheDocument();
  });

  it('renders all available options', () => {
    render(<StaticRouter location='/'>
                <SideMenu />
            </StaticRouter>
    );

    menuOptions.forEach(option => {
      expect(screen.getByText(option.name)).toBeInTheDocument();
    });
  });
});