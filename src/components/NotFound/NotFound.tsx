import React, { FC } from 'react';
import styled from '@emotion/native';
import { useTranslation } from 'react-i18next';

import { NoArtists, NoPlaylists } from '../icons';

interface Props {
  byArtist?: boolean;
}

const NotFoundLayout = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StyledText = styled.Text`
  color: ${({ theme }) => theme.colors.main};
  font-size: 16px;
  font-weight: 600;
`;
const StyledSubText = styled.Text`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.main50};
  font-size: 14px;
  font-weight: 500;
`;

export const NotFound: FC<Props> = ({ byArtist }) => {
  const { t } = useTranslation();

  return (
    <NotFoundLayout>
      {byArtist ? <NoArtists /> : <NoPlaylists />}
      <StyledText>{t('NotFound')}</StyledText>
      <StyledSubText>{t('NotFoundSubtext')}</StyledSubText>
    </NotFoundLayout>
  );
};
