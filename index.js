/**
 * @format
 */

import {AppRegistry, Text} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

if(Text.defaultProps){
    Text.defaultProps.allowFontScaling = false;
} else {
    Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
}

AppRegistry.registerComponent(appName, () => App);
