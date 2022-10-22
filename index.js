import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Bugsnag} from './src/utils';

Bugsnag.start();

AppRegistry.registerComponent(appName, () => App);
