import React, { FC, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router';
import styled from '@emotion/native';

import { BackHeader, BottomMenu, MenuItem, Text } from '../../components';
import { StatsIcon } from '../../components/icons';
import { ROUTES } from '../../routes/Routes.types';
import { TRACKS_PER_ROUND } from '../../utils';
import { StatisticsContext } from '../../contexts';

const Layout = styled.View`
  display: flex;
  align-items: stretch;
  height: 100%;
`;

const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.fontFamilyExtraBoldItalic};
  font-size: 24px;
  margin-bottom: 32px;
`;

const Content = styled.View`
  padding: 16px;
  flex-grow: 1;
`;

const Item = styled.View`
  margin: 15px 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.main50};
`;

const ItemText = styled(Text)`
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.fontFamilyMedium};
`;
export const Statistics: FC = () => {
  const navigate = useNavigate();
  const { statistics, clearStatistics } = useContext(StatisticsContext);

  const guessPercent = useMemo(() => {
    if (!statistics?.games && !statistics?.guess) return 0;
    return (
      (statistics?.guess / (statistics.games * TRACKS_PER_ROUND)) *
      100
    ).toFixed(1);
  }, [statistics, TRACKS_PER_ROUND]);

  return (
    <Layout>
      <BackHeader onPress={() => navigate(ROUTES.Start)} />
      <Content>
        <Title>Статистика</Title>
        <Item>
          <ItemText>Сыграно:</ItemText>
          <ItemText>{statistics?.games ?? 0}</ItemText>
        </Item>
        <Item>
          <ItemText>Угадано треков:</ItemText>
          <ItemText>{statistics?.guess ?? 0}</ItemText>
        </Item>
        <Item>
          <ItemText>Процент узнаваемости:</ItemText>
          <ItemText>{guessPercent}%</ItemText>
        </Item>
      </Content>
      <BottomMenu>
        <MenuItem
          text="Очистить статистику"
          icon={StatsIcon}
          onPress={clearStatistics}
        />
      </BottomMenu>
    </Layout>
  );
};
