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
import { StyleProp, View, ViewStyle } from 'react-native';

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
import { theme } from '../../themes';
import { PlaylistDto } from '../../api/api.types';

const layoutStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 12,
  paddingHorizontal: 16,
};
const backStyle: StyleProp<ViewStyle> = {
  marginVertical: 0,
  marginHorizontal: 16,
};

const searchFieldStyle: StyleProp<ViewStyle> = {
  marginLeft: 16,
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 'auto',
};
const byArtistStyle: StyleProp<ViewStyle> = {
  paddingVertical: 16,
  paddingHorizontal: 8,
  marginBottom: 16,
};

export const Search: FC = () => {
  const { t } = useTranslation();
  const api = useContext(ApiContext);
  const amp = useContext(AmplitudeContext);
  const [query, setQuery] = useState('');
  const [allowRequest, setAllowRequest] = useState(false);
  const [byArtist, setByArtist] = useState(false);
  const timeout = useRef(0);

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
    }, 500);
  }, []);

  const onChangeByArtistHandler = useCallback((value: boolean) => {
    setByArtist(value);
    setAllowRequest(true);
  }, []);

  const request = useQuery<PlaylistDto[], Error>(
    ['searchPlaylists', query, byArtist],
    () =>
      byArtist ? api.getPlaylistsByArtist(query) : api.getPlaylists(query),
    {
      enabled: !!query && allowRequest,
      onSettled: () => setAllowRequest(false),
    },
  );

  return (
    <>
      <View style={layoutStyle}>
        <Link to={ROUTES.Playlists} style={backStyle}>
          <RewindIcon fill={theme.colors.main50} height={24} width={24} />
        </Link>
        <View style={searchFieldStyle}>
          <SearchField
            onChangeText={onChangeHandler}
            autoFocus
            spellCheck={false}
            placeholderTextColor={theme.colors.main50}
          />
        </View>
      </View>
      <View style={byArtistStyle}>
        <SwitchWithLabel
          text={t('FindByArtist')}
          value={byArtist}
          setValue={onChangeByArtistHandler}
        />
      </View>
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
