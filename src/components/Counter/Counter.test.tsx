import React from 'react';
import { render } from '@testing-library/react';
import { Counter } from './Counter';

test('Counter component', () => {
  const { getByText } = render(<Counter />);
  const numberElement = getByText(/5/i);
  expect(numberElement).toBeInTheDocument();
});
