export interface ITheme {
  fontFamily: string;
  fontFamilyMedium: string;
  fontFamilySemiBold: string;
  fontFamilyBold: string;
  fontFamilyExtraBoldItalic: string;

  colors: {
    accent: string;
    accent50: string;
    bg: string;
    bg50: string;
    bg75: string;
    main: string;
    main5: string;
    main10: string;
    main20: string;
    main50: string;
    main80: string;
    main5onBg: string;
    main10onBg: string;
    main20onBg: string;
    main50onBg: string;
    main80onBg: string;
    danger: string;
  };
}
