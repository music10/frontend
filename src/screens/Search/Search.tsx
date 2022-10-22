import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';
import styled from '@emotion/native';

import {
  BottomMenu,
  MenuItem,
  NotFound,
  PlaylistList,
  SearchField,
  SwitchWithLabel,
} from '../../components';
import { RewindIcon } from '../../components/icons';
import { AmplitudeContext, ApiContext } from '../../contexts';
import { ROUTES } from '../../routes/Routes.types';
import { PlaylistDto, Type } from '../../api/api.types';
import { useTheme } from '@emotion/react';
import { InteractionState } from 'react-native';

const Layout = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
`;

const Back = styled.Pressable`
  margin: 0 16px;
`;

const SearchFieldStyled = styled.View`
  margin-left: 16px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
`;

const ByArtist = styled.View`
  padding: 16px 8px;
  margin-bottom: 16px;
`;

export const Search: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const api = useContext(ApiContext);
  const amp = useContext(AmplitudeContext);
  const [query, setQuery] = useState('');
  const [allowRequest, setAllowRequest] = useState(false);
  const [byArtist, setByArtist] = useState(false);
  const timeout = useRef(0);
  const theme = useTheme();

  useEffect(() => {
    amp.logEvent('Search Opened');

    return () => {
      amp.logEvent('Search Exited');
    };
  }, [amp]);

  const onChangeHandler = useCallback((value: string) => {
    setQuery(value);
    clearTimeout(timeout.current);
    timeout.current = +setTimeout(() => {
      setAllowRequest(true);
    }, 1000);
  }, []);

  const onChangeByArtistHandler = useCallback((value: boolean) => {
    setByArtist(value);
    setAllowRequest(true);
  }, []);

  const request = useQuery<PlaylistDto[], Error>(
    ['searchPlaylists', query, byArtist],
    () => api.getPlaylists(byArtist ? Type.artist : Type.playlist, query),
    {
      enabled: !!query && allowRequest,
      onSettled: () => setAllowRequest(false),
    },
  );

  return (
    <>
      <Layout>
        <Back onPress={() => navigate(ROUTES.Playlists)}>
          {({ hovered, pressed }: InteractionState) => (
            <RewindIcon
              fill={
                hovered || pressed ? theme.colors.main80 : theme.colors.main50
              }
              height={24}
              width={24}
            />
          )}
        </Back>
        <SearchFieldStyled>
          <SearchField
            onChangeText={onChangeHandler}
            autoFocus
            spellCheck={false}
            placeholderTextColor={theme.colors.main50}
          />
        </SearchFieldStyled>
      </Layout>
      <ByArtist>
        <SwitchWithLabel
          text={t('FindByArtist')}
          value={byArtist}
          setValue={onChangeByArtistHandler}
        />
      </ByArtist>
      {query ? (
        request.isSuccess && !request.data?.length ? (
          <>
            <NotFound byArtist={byArtist} />
            <BottomMenu>
              <MenuItem
                icon={RewindIcon}
                text={t('ToPlaylists')}
                onPress={() => navigate(ROUTES.Playlists)}
              />
            </BottomMenu>
          </>
        ) : (
          <PlaylistList request={request} />
        )
      ) : null}
    </>
  );
};
