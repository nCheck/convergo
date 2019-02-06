import { createAppContainer, createStackNavigator,createSwitchNavigator } from 'react-navigation';


import AuthStack from './AuthTabNav';
import MainTabNavigator from './MainTabNav';






export default createAppContainer(createSwitchNavigator(
    {
      Main: MainTabNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  ));