import React, { Component } from 'react';
import { createAppContainer, createStackNavigator,createSwitchNavigator } from 'react-navigation';


// import AuthStack from './AuthTabNav';
// import MainTabNavigator from './MainTabNav';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';





const MainCon = createStackNavigator(

  {
    Home : { screen : HomeScreen },
    Setting : { screen : SettingScreen }
  },
  {
    initialRouteName : 'Home'
  }

)

export default createAppContainer( MainCon );