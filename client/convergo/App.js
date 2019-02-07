import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator,createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import { Font } from 'expo'
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import AdminScreen from './screens/AdminScreen'
import FinanceScreen from './screens/FinanceScreen'
import MarketingScreen from './screens/MarketingScreen'
import ActivityScreen from './screens/ActivityScreen'
import SideBar from './screens/SideBar'
import FundraiserScreen from './screens/Fundraiser'
import FundForm from './screens/FundForm';
import DoctorScreen from './screens/DoctorScreen';
import DoctorForm from './screens/DoctorForm';
import ActivityForm from './screens/ActivityForm';
import StudentInfoScreen from './screens/StudentInfoScreen';


const AdminDrawer = createDrawerNavigator({
  Admin: {
    screen: AdminScreen,
  },
  Marketing : { screen : MarketingScreen },
  StudentInfo : { screen : StudentInfoScreen }
} , {
  contentComponent :  props => <SideBar routes={ ["Marketing", "Admin", 'StudentInfo'] } {...props}/> ,
  contentOptions : {
    activeTintColor : 'red'
  }
}
);


const FinanceDrawer = createDrawerNavigator({
  Finance: {
    screen: FinanceScreen,
  },
  Fundraiser : { screen : FundraiserScreen },
  Activity : { screen : ActivityScreen },
} , {
  contentComponent :  props => <SideBar routes={ ["Fundraiser", "Activity"] } {...props} /> ,
  contentOptions : {
    activeTintColor : 'red'
  }
}
);

const MarketingDrawer = createDrawerNavigator({
  Marketing: {
    screen: MarketingScreen,
  },
  Doctor : { screen : DoctorScreen },
  Activity : { screen : ActivityScreen },
} , {
  contentComponent :  props => <SideBar routes={ ["Doctor", "Activity"] } {...props} /> ,
  contentOptions : {
    activeTintColor : 'red'
  }
}
);



const MainCon = createStackNavigator(

  {
    Home : { screen : HomeScreen },
    Admin : { screen : AdminDrawer },
    Marketing : { screen : MarketingDrawer },
    Finance : { screen : FinanceDrawer } ,
    Setting : { screen : SettingScreen } ,
    Activity : { screen : ActivityScreen },
    Fundraiser : { screen : FundraiserScreen },
    Activity : { screen : ActivityScreen },
    FundForm : { screen : FundForm },
    Doctor : { screen : DoctorScreen },
    DoctorForm : { screen : DoctorForm },
    ActivityForm : { screen : ActivityForm },
    StudentInfo : { screen : StudentInfoScreen }
  },
  {
    initialRouteName : 'Home',
    defaultNavigationOptions : ( {navigation} ) =>{

      return {
        headerLeft:(
            <Ionicons name="md-menu" size={50} color="black" onPress={() => navigation.toggleDrawer()} />
        )      

    }
  }

}

)





const AppNav = createAppContainer(MainCon)

export default class App extends React.Component<{}> {

  constructor(props){
    super(props);
    this.state = {
      loaded : false
    };
  }


  async componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState( { loaded : true } );
  }



  render() {
    if ( this.state.loaded ){

      return (
        <AppNav/>
    );

    }
    else{

      return (
        <View/>
    );

    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
