import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import YearLogo from './YearLogo';

describe('<YearLogo />', () => {
  test('it should mount', () => {
    render(<YearLogo />);
    
    const yearLogo = screen.getByTestId('YearLogo');

    expect(yearLogo).toBeInTheDocument();
  });
});