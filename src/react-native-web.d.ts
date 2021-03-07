import 'react-native';

declare module '@emotion/react' {
  export interface Theme {
    fontFamily: string;
    colors: {
      accent: string;
      accent50: string;
      bg: string;
      bg50: string;
      main: string;
      main5: string;
      main10: string;
      main20: string;
      main50: string;
      main80: string;
      danger: string;
    };
  }
}
