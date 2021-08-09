declare module 'react-page-visibility' {
  interface UsePageVisibility {
    constructor: () => boolean;
  }
  declare const usePageVisibility: Function<UsePageVisibility>;

  export default usePageVisibility;
}
