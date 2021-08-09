import React, { FC } from 'react';
import {
  Image,
  InteractionState,
  Platform,
  Pressable,
  PressableProps,
} from 'react-native';
import styled, { css } from '@emotion/native';
import { SvgUri } from 'react-native-svg';
import { useTheme } from '@emotion/react';
import { Text } from '../Text';
import { Link } from '../Link';
import { ROUTES } from '../../routes/Routes.types';

interface Props extends PressableProps {
  id: string;
  cover: string;
  name: string;
}

const StyledText = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamilySemiBold};
  font-size: 14px;
  margin-left: 24px;
  color: ${({ theme }) => theme.colors.main};
`;

const borderRadiusStyle = {
  borderRadius: 4,
};

export const PlaylistItem: FC<Props> = ({ id, name, cover, ...props }) => {
  const theme = useTheme();

  return (
    <Link
      to={`${ROUTES.Game}/${id}`}
      component={Pressable}
      accessibilityRole="button"
      style={({ hovered, pressed }: InteractionState) =>
        css`
          display: flex;
          flex-direction: row;
          align-items: center;
          border-radius: 4px;
          padding: 8px;
          margin: 0 8px;
          background-color: ${hovered
            ? theme.colors.main10
            : pressed
            ? theme.colors.main5
            : 'transparent'};
          border: 2px solid transparent;
        `
      }
      {...props}
    >
      {Platform.OS === 'web' ? (
        <img
          alt=""
          src={cover}
          height={48}
          width={48}
          style={borderRadiusStyle}
        />
      ) : /\.svg$/.test(cover) && cover ? (
        <SvgUri uri={cover} height={48} width={48} style={borderRadiusStyle} />
      ) : (
        <Image
          source={{ uri: cover, height: 48, width: 48 }}
          style={borderRadiusStyle}
        />
      )}
      <StyledText>{name}</StyledText>
    </Link>
  );
};
