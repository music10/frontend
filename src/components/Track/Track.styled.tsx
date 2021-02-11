import styled, { css } from '@emotion/native';

import { TrackCardProps, TrackCardVariant } from './Track.types';

export const StyledTrack = styled.Pressable<TrackCardProps>`
  padding: 12px 48px;
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  position: relative;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.colors.main};
  & + & {
    margin-top: 12px;
  }
  ${({ type, theme }) =>
    type === TrackCardVariant.Success
      ? css`
          border: 2px solid ${theme.colors.accent};
          color: ${theme.colors.accent};
        `
      : type === TrackCardVariant.Wrong
      ? css`
          border: 2px solid ${theme.colors.danger};
          color: ${theme.colors.danger};
        `
      : css``}
`;

export const TrackName = styled.Text`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.main};
`;

export const TrackAuthor = styled.Text`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.main};
  text-align: center;
  opacity: 0.7;
`;
