import React, { FC } from 'react';
import { useNavigate } from 'react-router';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import { Text } from '../../../components';
import { RewindIcon } from '../../../components/icons';
import { ROUTES } from '../../../routes/Routes.types';

const Back = styled.Pressable`
  margin: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 64px;
`;

const TextStyled = styled(Text)`
  margin-left: 8px;
  text-decoration-line: none;
  color: ${({ theme }) => theme.colors.main50};
`;

const RewindIconStyled = styled(RewindIcon)`
  padding: 0 8px;
`;

export const Header: FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Back onPress={() => navigate(ROUTES.Playlists)}>
      <RewindIconStyled fill={theme.colors.main50} width={24} height={24} />
      <TextStyled>назад</TextStyled>
    </Back>
  );
};
