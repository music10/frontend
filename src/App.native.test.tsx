import React from 'react';
import { render } from '@testing-library/react-native';
import App from './App';
import { AppWrapper } from './components';

test('render App component', () => {
  const { getByText } = render(
    <AppWrapper>
      <App />
    </AppWrapper>,
  );
  const linkElement = getByText(/Играть/i);
  expect(linkElement).toBeDefined();
});
