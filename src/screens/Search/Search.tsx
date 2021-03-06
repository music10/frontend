import React, { FC, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import { View } from 'react-native';
import {
  Link,
  MenuItem,
  NotFound,
  PlaylistList,
  SearchField,
  SwitchWithLabel,
} from '../../components';
import { RewindIcon } from '../../components/icons';
import { AmplitudeContext, ApiContext } from '../../contexts';
import { IPlaylist } from '../../interfaces';
import { ROUTES } from '../../routes/Routes.types';

const SearchLayout = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
`;
const BackLayout = styled.View`
  margin: 0 16px;
`;
const SearchFieldLayout = styled.View`
  margin-left: 16px;
  flex: 1 1 auto;
`;
const ByArtistLayout = styled.View`
  padding: 16px 8px;
`;

export const Search: FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const api = useContext(ApiContext);
  const amp = useContext(AmplitudeContext);
  const [query, setQuery] = useState('');
  const [byArtist, setByArtist] = useState(false);

  useEffect(() => {
    amp.logEvent('Search Opened');

    return () => {
      amp.logEvent('Search Exited');
    };
  }, [amp]);

  const request = useQuery<IPlaylist[], Error>(
    ['searchPlaylists', query, byArtist],
    () =>
      byArtist
        ? api.searchPlaylistsByArtist(query)
        : api.searchPlaylists(query),
  );

  return (
    <>
      <SearchLayout>
        <BackLayout>
          <Link to={ROUTES.Playlists}>
            <RewindIcon fill={theme.colors.main50} />
          </Link>
        </BackLayout>
        <SearchFieldLayout>
          <SearchField
            onChangeText={setQuery}
            autoFocus
            spellCheck={false}
            placeholderTextColor={theme.colors.main50}
          />
        </SearchFieldLayout>
      </SearchLayout>
      <ByArtistLayout>
        <SwitchWithLabel
          text={t('FindByArtist')}
          value={byArtist}
          setValue={setByArtist}
        />
      </ByArtistLayout>
      <View style={{ marginTop: 16 }}>
        {query ? (
          request.isSuccess && !request.data?.length ? (
            <>
              <View
                style={{
                  flexGrow: 1,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <NotFound byArtist={byArtist} />
              </View>
              <Link
                to={ROUTES.Playlists}
                component={MenuItem}
                icon={RewindIcon}
                text={t('ToPlaylists')}
              />
            </>
          ) : (
            <PlaylistList {...request} />
          )
        ) : null}
      </View>
    </>
  );
};
