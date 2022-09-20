import React, { FC, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router';
import styled from '@emotion/native';

import { BackHeader, BottomMenu, MenuItem, Text } from '../../components';
import { RefreshIcon } from '../../components/icons';
import { ROUTES } from '../../routes/Routes.types';
import { declOfNum, TRACKS_PER_ROUND } from '../../utils';
import { StatisticsContext } from '../../contexts';
import { ScrollView } from 'react-native';

const Layout = styled.View`
  display: flex;
  align-items: stretch;
  height: 100%;
`;

const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.fontFamilyBold};
  font-size: 18px;
  margin-bottom: 32px;
`;

const Content = styled.View`
  padding: 16px 16px 0;
  flex-grow: 1;
`;

const Item = styled.View`
  margin: 8px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.main5};
`;

const ItemTitle = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamilyExtraBoldItalic};
  font-size: 48px;
  color: ${({ theme }) => theme.colors.accent};
`;

const ItemTextContainer = styled.View`
  flex-direction: column;
  margin-left: 24px;
`;

const ItemText = styled(Text)`
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.fontFamilyMedium};
  font-size: 16px;
  line-height: 22px;
`;

export const Statistics: FC = () => {
  const navigate = useNavigate();
  const { statistics, clearStatistics } = useContext(StatisticsContext);

  const guessPercent = useMemo(() => {
    if (!statistics?.games || !statistics?.guess) return 0;
    return Math.round(
      (statistics?.guess / (statistics.games * TRACKS_PER_ROUND)) * 100,
    );
  }, [statistics, TRACKS_PER_ROUND]);

  const secondsPerTrack = useMemo(() => {
    if (!statistics?.games || !statistics?.seconds) return 0;
    return Math.round(
      statistics?.seconds / (statistics.games * TRACKS_PER_ROUND),
    );
  }, [statistics, TRACKS_PER_ROUND]);

  return (
    <Layout>
      <BackHeader onPress={() => navigate(ROUTES.Start)} />
      <ScrollView>
        <Content>
          <Title>Статистика</Title>
          <Item>
            <ItemTitle>{statistics?.games ?? 0}</ItemTitle>
            <ItemTextContainer>
              <ItemText>завершено</ItemText>
              <ItemText>игр</ItemText>
            </ItemTextContainer>
          </Item>
          <Item>
            <ItemTitle>{statistics?.guess ?? 0}</ItemTitle>
            <ItemTextContainer>
              <ItemText>угадано</ItemText>
              <ItemText>треков</ItemText>
            </ItemTextContainer>
          </Item>
          <Item>
            <ItemTitle>{guessPercent}%</ItemTitle>
            <ItemTextContainer>
              <ItemText>от всех</ItemText>
              <ItemText>попыток</ItemText>
            </ItemTextContainer>
          </Item>
          <Item>
            <ItemTitle>{secondsPerTrack}</ItemTitle>
            <ItemTextContainer>
              <ItemText>
                {declOfNum(secondsPerTrack, ['секунда', 'секунды', 'секунд'])} в
                среднем
              </ItemText>
              <ItemText>на попытку</ItemText>
            </ItemTextContainer>
          </Item>
          <Item>
            <ItemTitle>{statistics?.seconds ?? 0}</ItemTitle>
            <ItemTextContainer>
              <ItemText>
                {declOfNum(statistics?.seconds ?? 0, [
                  'секунда',
                  'секунды',
                  'секунд',
                ])}{' '}
                музыки
              </ItemText>
              <ItemText>
                {declOfNum(statistics?.seconds ?? 0, [
                  'прослушана',
                  'прослушано',
                  'прослушано',
                ])}
              </ItemText>
            </ItemTextContainer>
          </Item>
        </Content>
        <BottomMenu>
          <MenuItem
            text="Очистить статистику"
            icon={RefreshIcon}
            onPress={clearStatistics}
          />
        </BottomMenu>
      </ScrollView>
    </Layout>
  );
};
