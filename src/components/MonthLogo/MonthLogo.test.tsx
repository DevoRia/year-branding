import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MonthLogo from './MonthLogo';

describe('<MonthLogo />', () => {
  test('it should mount', () => {
    render(<MonthLogo />);
    
    const monthLogo = screen.getByTestId('MonthLogo');

    expect(monthLogo).toBeInTheDocument();
  });
});