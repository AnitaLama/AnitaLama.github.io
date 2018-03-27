import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

import Icon from 'react-native-vector-icons/FontAwesome';
export default class SecondScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props){
  super(props);
  this.state ={
    username: this.props.navigation.state.params.username,
    password: this.props.navigation.state.params.password,
  }

}

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center'}}>
        <Text>Second Screen</Text>
        <Text>Hello {this.state.username}</Text>
        
        <Button
          title= "Home"
          onPress={ () => this.props.navigation.navigate('Home') }
        />
       
      </View>
    );
  }
}