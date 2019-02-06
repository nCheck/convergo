import { createStackNavigator } from 'react-navigation'
import TabBarIcon from '../components/TabBarIcon';





const SettingStack = createStackNavigator({
    Setting: SettingScreen,
  });
  
  SettingStack.navigationOptions = {
    tabBarLabel: 'Setting',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name='md-options'
      />
    ),
  };