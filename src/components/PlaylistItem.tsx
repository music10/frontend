import React, { FC, useCallback, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { InteractionState, Pressable } from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import styled, { css } from '@emotion/native';
import { useTheme } from '@emotion/react';

import { Text } from './Text';
import { PlaylistCover } from './PlaylistCover';
import { ROUTES } from '../routes/Routes.types';
import { EyeIcon, HeartBrokenIcon, HeartIcon } from './icons';
import { BlurView } from './BlurView/BlurView';
import { PlaylistDto } from '../api/api.types';
import { FavoritesContext } from '../contexts';

const MenuOptionBlock = styled.View`
  padding: 8px 16px;
  align-items: flex-start;
  justify-content: flex-start;
`;
const TextStyled = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamilySemiBold};
  font-size: 14px;
  margin-left: 24px;
  color: ${({ theme }) => theme.colors.main};
`;
const ContextMenuItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const ContextMenuText = styled(Text)`
  margin: 18px;
  font-family: ${({ theme }) => theme.fontFamilySemiBold};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.main};
`;

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
  const theme = useTheme();
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
        style={({ hovered, pressed }: InteractionState) =>
          css({
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
          })
        }
      >
        <PlaylistCover size={48} cover={cover} />
        <TextStyled>{name}</TextStyled>
      </Pressable>

      <MenuOptions
        optionsContainerStyle={css({
          backgroundColor: theme.colors.main20,
          borderRadius: 8,
          zIndex: 1,
          elevation: 1,
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        })}
      >
        <BlurView overlayColor="transparent">
          <MenuOption
            onSelect={() => navigate(`${ROUTES.Playlist}/${type}/${id}`)}
          >
            <MenuOptionBlock>
              <ContextMenuItem>
                <EyeIcon fill={theme.colors.main} />
                <ContextMenuText>Просмотреть</ContextMenuText>
              </ContextMenuItem>
            </MenuOptionBlock>
          </MenuOption>
        </BlurView>
        <BlurView overlayColor="transparent">
          <MenuOption
            onSelect={() => {
              isFavoritePlaylist ? remove(id) : add({ id, name, cover, type });
              hideContextMenu();
            }}
          >
            <MenuOptionBlock>
              <ContextMenuItem>
                {isFavoritePlaylist ? (
                  <HeartBrokenIcon fill={theme.colors.main} />
                ) : (
                  <HeartIcon fill={theme.colors.main} />
                )}
                <ContextMenuText>
                  {isFavoritePlaylist ? 'Разлюбить' : 'Сохранить'}
                </ContextMenuText>
              </ContextMenuItem>
            </MenuOptionBlock>
          </MenuOption>
        </BlurView>
      </MenuOptions>
    </Menu>
  );
};
