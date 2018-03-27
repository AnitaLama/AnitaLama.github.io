import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
  header: null,
  tabBarLabel: 'SETTINGS',
  tabBarIcon:() => {
    <Icon name="home" size={25} color='white' />
    },
    showIcon: true,


}
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text>Settings Screen</Text>   
        <Button
        title= "Details"
          onPress={ () => this.props.navigation.navigate('Details')}
        />
        <Button
        title= "Home"
          onPress={ () => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
