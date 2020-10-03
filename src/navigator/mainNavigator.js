import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen68123856Navigator from '../features/BlankScreen68123856/navigator';
import BlankScreen67123855Navigator from '../features/BlankScreen67123855/navigator';
import ArticleList123838Navigator from '../features/ArticleList123838/navigator';
import ArticleList123837Navigator from '../features/ArticleList123837/navigator';
import ArticleList123836Navigator from '../features/ArticleList123836/navigator';
import BlankScreen1123770Navigator from '../features/BlankScreen1123770/navigator';
import BlankScreen0123769Navigator from '../features/BlankScreen0123769/navigator';
import UserProfile123759Navigator from '../features/UserProfile123759/navigator';
import Tutorial123758Navigator from '../features/Tutorial123758/navigator';
import NotificationList123730Navigator from '../features/NotificationList123730/navigator';
import Settings123729Navigator from '../features/Settings123729/navigator';
import Settings123721Navigator from '../features/Settings123721/navigator';
import UserProfile123719Navigator from '../features/UserProfile123719/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen68123856: { screen: BlankScreen68123856Navigator },
BlankScreen67123855: { screen: BlankScreen67123855Navigator },
ArticleList123838: { screen: ArticleList123838Navigator },
ArticleList123837: { screen: ArticleList123837Navigator },
ArticleList123836: { screen: ArticleList123836Navigator },
BlankScreen1123770: { screen: BlankScreen1123770Navigator },
BlankScreen0123769: { screen: BlankScreen0123769Navigator },
UserProfile123759: { screen: UserProfile123759Navigator },
Tutorial123758: { screen: Tutorial123758Navigator },
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
