import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <Button
        title= "Details"
          onPress={ () => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}
