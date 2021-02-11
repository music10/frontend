import React from 'react';
import styled from '@emotion/native';

import { TRACKS_PER_ROUND } from '../../utils';
import { ProgressBarItem, ProgressBarItemVariant } from './ProgressBarItem';

export interface ProgressBarProps {
  progress: boolean[];
  vertical?: boolean;
  isSelectTrack?: boolean;
}

export const StyledProgressBar = styled.View<
  Omit<ProgressBarProps, 'progress'>
>`
  margin: 24px 0;
  display: flex;
  flex-direction: row;
  padding: 0;
`;

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress = [],
  isSelectTrack,
  ...props
}) => (
  <StyledProgressBar {...props}>
    {progress.map((item, index) => (
      <ProgressBarItem
        key={index}
        variant={
          item ? ProgressBarItemVariant.Success : ProgressBarItemVariant.Wrong
        }
      />
    ))}
    {progress.length < TRACKS_PER_ROUND && !isSelectTrack ? (
      <ProgressBarItem
        variant={ProgressBarItemVariant.Current}
        key={progress.length}
      />
    ) : null}
    {new Array(
      Math.max(TRACKS_PER_ROUND - progress.length - +!isSelectTrack, 0),
    )
      .fill(true)
      .map((_, index) => (
        <ProgressBarItem
          key={progress.length + index}
          variant={ProgressBarItemVariant.Default}
        />
      ))}
  </StyledProgressBar>
);
