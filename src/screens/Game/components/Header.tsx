import React, { FC, useContext } from 'react';
import { Pressable } from 'react-native';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { PauseIcon } from '../../../components/icons/Pause';
import { PlayIcon } from '../../../components/icons';
import { MusicContext } from '../../../contexts';

const HeaderLayout = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 16px;
`;

export const Header: FC = () => {
  const { isPlaying, play, pause, allowPlay } = useContext(MusicContext);
  const theme = useTheme();

  return (
    <HeaderLayout>
      {isPlaying ? (
        <Pressable
          onPress={() => {
            if (allowPlay) {
              pause();
            }
          }}
        >
          <PauseIcon fill={theme.colors.main50} />
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            if (allowPlay) {
              play();
            }
          }}
        >
          <PlayIcon fill={theme.colors.main50} />
        </Pressable>
      )}
    </HeaderLayout>
  );
};
