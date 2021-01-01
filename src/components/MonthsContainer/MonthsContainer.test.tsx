import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MonthsContainer from './MonthsContainer';

describe('<MonthsContainer />', () => {
  test('it should mount', () => {
    render(<MonthsContainer />);
    
    const monthsContainer = screen.getByTestId('MonthsContainer');

    expect(monthsContainer).toBeInTheDocument();
  });
});