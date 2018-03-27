
import React from 'react';
import { View, Text, Button} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation'; // Version can be specified in package.json

import HomeScreen from './first';
import LoginScreen from './app/components/loginScreen';
import SuccessScreen from './app/components/successScreen';
import SecondScreen from './second';
import DrawerScreen from './drawer';
import OfferScreen from './app/components/offersScreen';


const SwitchPage = StackNavigator(
{
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  Success: { screen: SuccessScreen },
  Second: { screen: SecondScreen },
  Drawer: { screen: DrawerScreen },
  Offer: { screen: OfferScreen },
},  
  {
    initialRouteName: 'Home',
     headerMode: 'none',
  }
);

export default class App extends React.Component {
  render(){
    return(
      <SwitchPage />

      );
  }
}