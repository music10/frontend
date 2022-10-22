import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { PlaceholderLoader } from '../PlaceholderLoader';
import { Cover, Description, Title, Wrapper } from './PlaylistHeader.styled';

export const PlaylistHeaderLoading: FC = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Cover>
        <PlaceholderLoader width={80} height={80} />
      </Cover>
      <Description>
        <Title>{t('Playlist')}</Title>
        <PlaceholderLoader height={14} width={170} />
      </Description>
    </Wrapper>
  );
};
