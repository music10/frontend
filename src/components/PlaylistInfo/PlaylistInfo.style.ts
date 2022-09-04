import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { theme } from '../../themes';

export const wrapStyle: StyleProp<ViewStyle> = {
  marginHorizontal: 16,
  marginTop: 80,
  marginBottom: 0,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const linkStyle: StyleProp<ViewStyle> = {
  paddingVertical: 8,
  paddingHorizontal: 8,
  borderWidth: 2,
  borderColor: 'transparent',
};

export const titleWrapStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  flexDirection: 'row',
};

export const nameStyle: StyleProp<TextStyle> = {
  marginTop: 8,
  fontFamily: theme.fontFamilySemiBold,
  fontSize: 14,
  lineHeight: 17,
  color: theme.colors.main80,
};
