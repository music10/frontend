import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      accent: string;
      bg: string;
      main: string;
      danger: string;
    };
  }
}
