

import { createStackNavigator } from 'react-navigation'
import TabBarIcon from '../components/TabBarIcon';





const HomeStack = createStackNavigator({
    Home: HomeScreen,
  });
  
  HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name='md-information-circle'
      />
    ),
  };
  