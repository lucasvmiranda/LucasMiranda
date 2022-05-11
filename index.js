import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

import Route from './src/routes/index.js';

AppRegistry.registerComponent(appName, () => Route);
