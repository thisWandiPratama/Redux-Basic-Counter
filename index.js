/**
 * @format
 */

import {AppRegistry} from 'react-native';
// noRedux
import App from "./src/counter/noRedux";
// use Redux
// import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
