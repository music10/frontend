import React, { FC, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import {
  BottomMenu,
  Link,
  MenuItem,
  NotFound,
  PlaylistList,
  SearchField,
  SwitchWithLabel,
} from '../../components';
import { RewindIcon } from '../../components/icons';
import { AmplitudeContext, ApiContext } from '../../contexts';
import { ROUTES } from '../../routes/Routes.types';
import { Components } from '../../api/api.types';

const SearchLayout = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
`;
const BackLayout = styled.View`
  margin: 0 16px;
  line-height: 0;
`;
const SearchFieldLayout = styled.View`
  margin-left: 16px;
  flex: 1 1 auto;
`;
const ByArtistLayout = styled.View`
  padding: 16px 8px;
  margin-bottom: 16px;
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

  const request = useQuery<Components.Schemas.PlaylistDto[], Error>(
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
            <RewindIcon fill={theme.colors.main50} height={24} width={24} />
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
      {query ? (
        request.isSuccess && !request.data?.length ? (
          <>
            <NotFound byArtist={byArtist} />
            <BottomMenu>
              <Link
                to={ROUTES.Playlists}
                component={MenuItem}
                icon={RewindIcon}
                text={t('ToPlaylists')}
              />
            </BottomMenu>
          </>
        ) : (
          <PlaylistList {...request} />
        )
      ) : null}
    </>
  );
};
