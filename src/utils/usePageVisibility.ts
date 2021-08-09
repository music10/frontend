import { Platform } from 'react-native';
import usePageVisibility from 'react-page-visibility';

export default Platform.OS === 'web' ? usePageVisibility : () => true;
