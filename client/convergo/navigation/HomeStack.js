import React from 'react';
import Colors from '../constants/Colors';
import { createStackNavigator } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen';

import { Ionicons } from '@expo/vector-icons'



const HomeStack = createStackNavigator({
    Home: HomeScreen,
  });
  
  HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (

      <Ionicons
        name='md-information-circle'
        size={26}
        style={{ marginBottom: -3 }}
        color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />

    ),
  };

export default HomeStack;