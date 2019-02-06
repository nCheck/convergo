import React, { Component } from 'react';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeStack from './HomeStack';
import SettingStack from './SettingStack'

export default createBottomTabNavigator({
    HomeStack,
    SettingStack
})