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
  margin-bottom: 40px;
`;

const Content = styled.View`
  flex-grow: 1;
`;

const Items = styled(Text)`
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.fontFamilyMedium};
  margin: 15px 0;
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
      <Title>Статистика</Title>
      <Content>
        <Items>Сыграно: {statistics?.games ?? 0}</Items>
        <Items>Угадано треков: {statistics?.guess ?? 0}</Items>
        <Items>Процент узнаваемости: {guessPercent}%</Items>
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
