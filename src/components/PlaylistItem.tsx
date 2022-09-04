import React, { FC, useCallback, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import {
  InteractionState,
  Pressable,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';

import { Text } from './Text';
import { PlaylistCover } from './PlaylistCover';
import { ROUTES } from '../routes/Routes.types';
import { EyeIcon, HeartBrokenIcon, HeartIcon } from './icons';
import { BlurView } from './BlurView/BlurView';
import { theme } from '../themes';
import { PlaylistDto } from '../api/api.types';
import { FavoritesContext } from '../contexts';

const textStyle: StyleProp<TextStyle> = {
  fontFamily: theme.fontFamilySemiBold,
  fontSize: 14,
  marginLeft: 24,
  color: theme.colors.main,
};
const contextMenuItemStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
};
const contextMenuTextStyle: StyleProp<TextStyle> = {
  margin: 18,
  fontFamily: theme.fontFamilySemiBold,
  fontSize: 14,
  color: theme.colors.main,
};

interface Props extends Pick<PlaylistDto, 'id' | 'name' | 'cover' | 'type'> {
  withoutMenu?: boolean;
}

export const PlaylistItem: FC<Props> = ({
  id,
  name,
  cover,
  type,
  withoutMenu = false,
}) => {
  const navigate = useNavigate();
  const { add, remove, isFavorite } = useContext(FavoritesContext);
  const isFavoritePlaylist = useMemo(() => isFavorite(id), [id, isFavorite]);

  const goToGame = useCallback(
    () => navigate(`${ROUTES.Game}/${type}/${id}`),
    [id, navigate, type],
  );

  const [opened, setOpened] = useState(false);

  const hideContextMenu = useCallback(() => {
    setOpened(false);
  }, []);

  const showContextMenu = useCallback(() => {
    setOpened(true);
  }, []);

  return (
    <Menu
      opened={!withoutMenu && opened}
      onBackdropPress={hideContextMenu}
      onClose={hideContextMenu}
    >
      <MenuTrigger
        triggerOnLongPress={false}
        customStyles={{
          triggerOuterWrapper: { position: 'absolute', right: 32 },
        }}
      />
      <Pressable
        testID="PlaylistItem"
        accessibilityRole="button"
        onPress={goToGame}
        onLongPress={showContextMenu}
        delayLongPress={450}
        style={({ hovered, pressed }: InteractionState) => ({
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 4,
          paddingVertical: 8,
          paddingHorizontal: 8,
          marginVertical: 0,
          marginHorizontal: 8,
          backgroundColor: hovered
            ? theme.colors.main10
            : pressed
            ? theme.colors.main5
            : 'transparent',
          borderWidth: 2,
          borderColor: 'transparent',
        })}
      >
        <PlaylistCover size={48} cover={cover} />
        <Text style={textStyle}>{name}</Text>
      </Pressable>

      <MenuOptions
        optionsContainerStyle={{
          backgroundColor: theme.colors.main20,
          borderRadius: 8,
          zIndex: 1,
          elevation: 1,
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        <BlurView overlayColor="transparent">
          <MenuOption
            onSelect={() => navigate(`${ROUTES.Playlist}/${type}/${id}`)}
          >
            <View style={{ paddingVertical: 8, paddingHorizontal: 16 }}>
              <View style={contextMenuItemStyle}>
                <EyeIcon fill={theme.colors.main} />
                <Text style={contextMenuTextStyle}>Просмотреть</Text>
              </View>
            </View>
          </MenuOption>
        </BlurView>
        <BlurView overlayColor="transparent">
          <MenuOption
            onSelect={() => {
              isFavoritePlaylist ? remove(id) : add({ id, name, cover, type });
              hideContextMenu();
            }}
          >
            <View
              style={{
                paddingVertical: 8,
                paddingHorizontal: 16,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
              }}
            >
              <View style={contextMenuItemStyle}>
                {isFavoritePlaylist ? (
                  <HeartBrokenIcon fill={theme.colors.main} />
                ) : (
                  <HeartIcon fill={theme.colors.main} />
                )}
                <Text style={contextMenuTextStyle}>
                  {isFavoritePlaylist ? 'Разлюбить' : 'Сохранить'}
                </Text>
              </View>
            </View>
          </MenuOption>
        </BlurView>
      </MenuOptions>
    </Menu>
  );
};
