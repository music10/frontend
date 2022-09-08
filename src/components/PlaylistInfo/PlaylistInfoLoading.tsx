import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import { SchevronRightIcon } from '../icons';
import { PlaceholderLoader } from '../PlaceholderLoader';
import { Link, Title, TitleWrap, Wrapper } from './PlaylistInfo.styled';

const Name = styled(PlaceholderLoader)`
  margin-top: 8px;
`;

export const PlaylistInfoLoading: FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Wrapper>
      <Link as={View}>
        <TitleWrap>
          <Title>{t('Playlist')}</Title>
          <SchevronRightIcon
            width={16}
            height={16}
            fill={theme.colors.main50}
          />
        </TitleWrap>
        <Name height={14} width={170} />
      </Link>
    </Wrapper>
  );
};
