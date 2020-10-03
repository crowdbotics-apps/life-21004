import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList123730Navigator from '../features/NotificationList123730/navigator';
import Settings123729Navigator from '../features/Settings123729/navigator';
import Settings123721Navigator from '../features/Settings123721/navigator';
import UserProfile123719Navigator from '../features/UserProfile123719/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList123730: { screen: NotificationList123730Navigator },
Settings123729: { screen: Settings123729Navigator },
Settings123721: { screen: Settings123721Navigator },
UserProfile123719: { screen: UserProfile123719Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
