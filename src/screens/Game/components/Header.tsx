import React, { FC } from 'react';
import styled from '@emotion/native';

const HeaderLayout = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 16px;
`;

export const Header: FC = () => {
  // const { isPlaying, play, pause, allowPlay } = useContext(MusicContext);
  // const theme = useTheme();

  return (
    <HeaderLayout>
      {/*<Button*/}
      {/*  onPress={() => {*/}
      {/*    if (allowPlay) {*/}
      {/*      if (isPlaying) {*/}
      {/*        pause();*/}
      {/*      } else {*/}
      {/*        play();*/}
      {/*      }*/}
      {/*    }*/}
      {/*  }}*/}
      {/*>*/}
      {/*  {({ hovered, focused }: InteractionState) =>*/}
      {/*    isPlaying ? (*/}
      {/*      <PauseIcon*/}
      {/*        fill={*/}
      {/*          focused*/}
      {/*            ? theme.colors.main*/}
      {/*            : hovered*/}
      {/*            ? theme.colors.main80*/}
      {/*            : theme.colors.main50*/}
      {/*        }*/}
      {/*      />*/}
      {/*    ) : (*/}
      {/*      <PlayIcon*/}
      {/*        fill={*/}
      {/*          focused*/}
      {/*            ? theme.colors.main*/}
      {/*            : hovered*/}
      {/*            ? theme.colors.main80*/}
      {/*            : theme.colors.main50*/}
      {/*        }*/}
      {/*      />*/}
      {/*    )*/}
      {/*  }*/}
      {/*</Button>*/}
    </HeaderLayout>
  );
};
