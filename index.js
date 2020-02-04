/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {createAppContainer} from 'react-navigation';
import {RoutersNavigator, RoutersBottomTabNavigator, RouterDrawerNavigator} from './routers';


AppRegistry.registerComponent(appName, () => createAppContainer(RouterDrawerNavigator));
