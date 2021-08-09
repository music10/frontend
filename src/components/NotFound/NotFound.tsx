import React, { FC } from 'react';
import styled from '@emotion/native';
import { useTranslation } from 'react-i18next';

import { NoArtists, NoPlaylists } from '../icons';
import { Text } from '../Text';

interface Props {
  byArtist?: boolean;
}

const NotFoundLayout = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.main};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamilySemiBold}; ;
`;
const StyledSubText = styled(Text)`
  margin-top: 8px;
  text-align: center;
  color: ${({ theme }) => theme.colors.main50};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamilyMedium}; ;
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
