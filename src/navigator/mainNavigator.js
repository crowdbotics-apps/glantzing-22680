import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile174614Navigator from '../features/UserProfile174614/navigator';
import Maps174595Navigator from '../features/Maps174595/navigator';
import Settings174573Navigator from '../features/Settings174573/navigator';
import Settings174558Navigator from '../features/Settings174558/navigator';
import NotificationList174557Navigator from '../features/NotificationList174557/navigator';
import Maps174556Navigator from '../features/Maps174556/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile174614: { screen: UserProfile174614Navigator },
Maps174595: { screen: Maps174595Navigator },
Settings174573: { screen: Settings174573Navigator },
Settings174558: { screen: Settings174558Navigator },
NotificationList174557: { screen: NotificationList174557Navigator },
Maps174556: { screen: Maps174556Navigator },

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
