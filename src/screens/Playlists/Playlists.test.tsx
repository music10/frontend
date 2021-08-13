import React from 'react';
import { render } from '@testing-library/react-native';
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
    render(
      <AppWrapper>
        <ContextProvider api={api} ws={ws}>
          <Playlists />
        </ContextProvider>
      </AppWrapper>,
    );
    expect(api.getCherryPickPlaylists).toHaveBeenCalled();

    expect(true).toBe(true);
  });
});
