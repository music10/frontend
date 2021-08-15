import React from 'react';
import { render } from '@testing-library/react';
import { AppWrapper, ContextProvider } from '../../components';
import { Start } from './Start';

describe('Start screen', () => {
  test('render', () => {
    const { getByText } = render(
      <AppWrapper>
        <ContextProvider>
          <Start />
        </ContextProvider>
      </AppWrapper>,
    );
    const linkElement = getByText(/Играть/i);
    expect(linkElement).toBeInTheDocument();
  });
});
