import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { AppWrapper, ContextProvider } from '../../components';
import { PLAYLISTS_MOCK } from '../../mocks';
import { Api } from '../../utils';
import { Search } from './Search';

describe('Search screen', () => {
  const api = new Api();

  beforeAll(async () => {
    jest
      .spyOn(api, 'getPlaylists')
      .mockImplementation(async () => PLAYLISTS_MOCK);
  });

  test('render', async () => {
    const { getByRole, findByText } = render(
      <AppWrapper>
        <ContextProvider api={api}>
          <Search />
        </ContextProvider>
      </AppWrapper>,
    );
    await waitFor(() => expect(getByRole('search')).toHaveBeenCalledTimes(1));

    const input = getByRole('search');
    fireEvent.changeText(input, 'Гуф');
    jest.runAllTimers();
    await waitFor(() => expect(api.getPlaylists).toHaveBeenCalledTimes(1));

    expect(api.getPlaylists).toHaveBeenCalledWith('Гуф');

    await waitFor(() => expect(findByText('Русский рэп')).toBeInTheDocument());
    expect(input.nodeValue).toBe('Гуф');
  });
});
