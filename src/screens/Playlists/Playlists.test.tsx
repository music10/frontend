import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { PLAYLISTS_MOCK } from '../../mocks';
import { Api, WS } from '../../utils';
import { AppWrapper, ContextProvider } from '../../components';
import { Playlists } from './Playlists';

describe('Playlists', () => {
  const api = new Api();
  const ws = new WS();

  beforeEach(async () => {
    jest
      .spyOn(api, 'getCherryPickPlaylists')
      .mockImplementation(async () => PLAYLISTS_MOCK);
  });

  it('Should render', async () => {
    const { getAllByRole } = render(
      <AppWrapper>
        <ContextProvider api={api} ws={ws}>
          <Playlists />
        </ContextProvider>
      </AppWrapper>,
    );

    expect(api.getCherryPickPlaylists).toHaveBeenCalled();
    await waitFor(() => getAllByRole('button'));
    expect(getAllByRole('button')).toHaveLength(17);
    expect(getAllByRole('button')[0]).toContain('Русский рэп');
  });
});
