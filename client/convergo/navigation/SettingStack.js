import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation'
import SettingScreen from '../screens/SettingScreen';

import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors';



const SettingStack = createStackNavigator({
    Setting: SettingScreen,
  });
  
  SettingStack.navigationOptions = {
    tabBarLabel: 'Setting',
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name='md-options'
        size={26}
        style={{ marginBottom: -3 }}
        color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />


    ),
  };

export default SettingStack;