import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { AppWrapper } from './components';

test('render App component', () => {
  render(
    <AppWrapper>
      <App />
    </AppWrapper>,
  );
  const linkElement = screen.getByText(/Играть/i);
  expect(linkElement).toBeInTheDocument();
});
