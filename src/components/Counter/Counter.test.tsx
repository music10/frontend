import React from 'react';
import { render } from '@testing-library/react';
import { GameContext } from '../../contexts';
import { Counter } from './Counter';

test('Counter component', () => {
  const { getByText } = render(
    <GameContext.Provider
      value={{
        number: { current: 5 },
        isPause: false,
        setPause: jest.fn(),
        isLoaded: true,
        setLoaded: jest.fn(),
      }}
    >
      <Counter />
    </GameContext.Provider>,
  );
  const numberElement = getByText(/5/i);
  expect(numberElement).toBeInTheDocument();
});
