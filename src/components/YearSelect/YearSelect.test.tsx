import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import YearSelect from './YearSelect';

describe('<YearSelect />', () => {
  test('it should mount', () => {
    render(<YearSelect />);
    
    const yearSelect = screen.getByTestId('YearSelect');

    expect(yearSelect).toBeInTheDocument();
  });
});