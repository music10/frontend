import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { theme } from '../../themes';

export const wrapperStyle: StyleProp<ViewStyle> = {
  margin: 16,
  display: 'flex',
  flexDirection: 'row',
};

export const coverStyle: StyleProp<ViewStyle> = {
  paddingVertical: 6,
  paddingHorizontal: 0,
  marginRight: 16,
};

export const descriptionStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  flexDirection: 'column',
  padding: 8,
  flexGrow: 0,
  flexShrink: 1,
  flexBasis: 'auto',
};

export const titleStyle: StyleProp<TextStyle> = {
  fontFamily: theme.fontFamilyMedium,
  fontSize: 14,
  color: theme.colors.main50,
  marginBottom: 8,
};

export const nameStyle: StyleProp<TextStyle> = {
  fontFamily: theme.fontFamilySemiBold,
  fontSize: 14,
  color: theme.colors.main,
};
