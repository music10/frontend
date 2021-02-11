import React, { useContext } from 'react';

import { ProgressBar } from '../../../components';
import { GameContext } from '../../../contexts';

export const Progress: React.FC = () => {
  const {
    result: { progress },
    gameState: { isSelectTrack },
  } = useContext(GameContext);

  return <ProgressBar progress={progress} isSelectTrack={isSelectTrack} />;
};
