import React, { useContext, useState } from 'react';
import { Switch } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import { Link, SearchField, NotFound, PlaylistList } from '../../components';
import { RewindIcon } from '../../components/icons';
import { ApiContext } from '../../contexts';
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
  flex-grow: 1;
`;
const ByArtistLayout = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 8px;
  padding: 16px 8px;
`;

const ByArtist = styled.Text`
  color: ${({ theme }) => theme.colors.main};
  font-size: 14px;
`;

export const Search = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const api = useContext(ApiContext);
  const [query, setQuery] = useState('');
  const [byArtist, setByArtist] = useState(false);

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
          <SearchField onChangeText={setQuery} />
        </SearchFieldLayout>
      </SearchLayout>
      <ByArtistLayout>
        <ByArtist>{t('FindByArtist')}</ByArtist>
        <Switch
          trackColor={{
            false: theme.colors.main50,
            true: theme.colors.accent50,
          }}
          thumbColor={byArtist ? theme.colors.accent : theme.colors.main}
          value={byArtist}
          onValueChange={setByArtist}
        />
      </ByArtistLayout>
      {query && (
        <>
          <PlaylistList {...request} />
          {request.isSuccess && !request.data?.length && (
            <NotFound byArtist={byArtist} />
          )}
        </>
      )}
    </>
  );
};
