import { useTheme } from '@emotion/react';
import React, { FC } from 'react';
import styled, { css } from '@emotion/native';
import { useTranslation } from 'react-i18next';
import { InteractionState, Pressable } from 'react-native';

import { Text } from '../Text';
import { SchevronRightIcon } from '../icons';
import { Components } from '../../api/api.types';

interface Props extends Components.Schemas.PlaylistDto {}

const TitleLayout = styled.View<Partial<Props>>`
  display: flex;
  flex-direction: row;
`;

const PlaylistName = styled(Text)<Partial<Props>>`
  margin-top: 8px;
  font-family: ${({ theme }) => theme.fontFamilySemiBold};
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.main80};
`;

export const PlaylistInfo: FC<Props> = ({ name }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Pressable
      style={css`
        padding: 8px;
        border: 2px solid transparent;
      `}
    >
      {({ hovered }: InteractionState) => (
        <>
          <TitleLayout>
            <Text
              style={css`
                font-family: ${theme.fontFamilyMedium};
                font-size: 14px;
                line-height: 17px;
                margin-right: 8px;
                color: ${hovered ? theme.colors.main80 : theme.colors.main50};
              `}
            >
              {t('Playlist')}
            </Text>
            <SchevronRightIcon
              width={16}
              height={16}
              fill={hovered ? theme.colors.main80 : theme.colors.main50}
            />
          </TitleLayout>
          <PlaylistName>{name}</PlaylistName>
        </>
      )}
    </Pressable>
  );
};
