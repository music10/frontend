import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { PLAYLISTS_MOCK } from '../../mocks';
import { Api } from '../../utils';
import { AppWrapper, ContextProvider } from '../../components';
import { Playlists } from './Playlists';

describe('Playlists screen', () => {
  const api = new Api();

  beforeAll(async () => {
    jest
      .spyOn(api, 'getCherryPickPlaylists')
      .mockImplementation(async () => PLAYLISTS_MOCK);
  });

  test('Should render', async () => {
    const { findAllByRole } = render(
      <AppWrapper>
        <ContextProvider api={api}>
          <Playlists />
        </ContextProvider>
      </AppWrapper>,
    );
    expect(api.getCherryPickPlaylists).toHaveBeenCalledTimes(1);

    await waitFor(() => expect(findAllByRole('button')).toBeTruthy());
    expect(findAllByRole('button')).toBe(5);
    expect(true).toBe(true);
  });
});
