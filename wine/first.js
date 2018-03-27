
import React from 'react';
import { View, Text, Button, StyleSheet, Animated, Dimensions } from 'react-native';
import { StackNavigator, navigationOptions, DrawerNavigator } from 'react-navigation'; // Version can be specified in package.json

import OfferScreen from './app/components/offersScreen';
import LoginScreen from './app/components/loginScreen';
import SuccessScreen from './app/components/successScreen';
import SecondScreen from './second';
import DrawerScreen from './drawer';


const navigation = DrawerNavigator(
  {
    Offer: {screen: OfferScreen},
    Login: { screen: LoginScreen },
    Drawer: { screen: DrawerScreen },
  },
  {
    drawerPosition: 'right',
    contentOptions: {
      activeTintColor: 'red',
      activeBackgroundColor: 'pink',
      inactiveTintColor: 'grey',
      backgroundColor: 'teal',
      inactiveBackgroundColor: 'black',
      style: {
        marginVertical: 200,
        backgroundColor: 'grey',
      }
    }
  },
)

export default navigation;
{/*
export default class HomeScreen extends React.Component {
static navigationOptions = {
  header : null
}

state = {
  animated: new Animated.Value(0)
  }
componentDidMount(){
  const {animated} = this.state;
    Animated.loop(
      Animated.timing(animated,{
      toValue: 1,
      duration: 1000,
    })
  ).start()
  
}
  render() {
    const { animated } = this.state; 

    return (


      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress = {
            () => this.props.navigation.navigate('DrawerOpen')
          }
          title= "MENU"
        />
        <Text style={{ paddingVertical: 15 }}>Home Screen</Text>
        <Button
        style={{ paddingVertical: 25}}
        title= "LOGIN"
          onPress={ () => this.props.navigation.navigate('Login')}
          
        />



          <Animated.View
            style={{
              paddingVertical: 35,
              width:100,
              height:100,
              borderRadius:50,
              backgroundColor:'rgba(122,122,122,0.5)',
              transform:[
              {
                scale: animated,
              }
              ]
            }}
          >
          </Animated.View>

          <Animated.View 
            style = {
              {
                paddingVertical: 10,
                height: 50,
                width: 50,
                backgroundColor:'teal',
                transform: [
                {
                  rotate: '45deg' 
                }
                ]
              }
            }
          >
          </Animated.View>
      </View>
    );
  }
}
*/}