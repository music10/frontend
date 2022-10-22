import '@emotion/react';
import { ITheme } from './themes/theme.interface';

declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}
