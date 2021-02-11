import { ButtonProps, ViewProps } from 'react-native';

// eslint-disable-next-line no-shadow
export enum TrackCardVariant {
  Success,
  Wrong,
  Default,
}

export interface TrackCardProps
  extends ViewProps,
    Pick<ButtonProps, 'onPress'> {
  type: TrackCardVariant;
}

export interface TrackProps extends TrackCardProps {
  track: string;
  author: string;
}
