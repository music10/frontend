import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { theme } from '../../themes';

export const wrapperStyle: StyleProp<ViewStyle> = {
  marginVertical: 16,
  marginHorizontal: 8,
  flexGrow: 0,
};

export const trackStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  flexDirection: 'row',
  padding: 8,
};
export const numberStyle: StyleProp<TextStyle> = {
  alignSelf: 'center',
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: 40,
  fontFamily: theme.fontFamilyMedium,
  fontSize: 14,
  color: theme.colors.main50,
};
export const descriptionStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  flexGrow: 0,
  flexShrink: 1,
  flexBasis: 'auto',
};
export const artistStyle: StyleProp<TextStyle> = {
  fontFamily: theme.fontFamilyMedium,
  fontSize: 14,
  color: theme.colors.main50,
};
export const nameStyle: StyleProp<TextStyle> = {
  fontFamily: theme.fontFamilySemiBold,
  fontSize: 14,
  color: theme.colors.main,
};
