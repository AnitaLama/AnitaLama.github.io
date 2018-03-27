import React from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

import dataABC from './data-article.json';
const abc = dataABC;
const data = [];
for( var i in abc ){
  data.push({
    url: abc[i].url,
    id: abc[i].user_id,
    un: abc[i].username,
  })
}

export default class SuccessScreen extends React.Component {
  static navigationOptions = {
    header : null
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
      <View style={{paddingVertical: 20}}>
        <Text>Success Screen</Text>
        <Text>Username : {this.state.username}</Text>
        <Text>Password : {this.state.password}</Text>
      </View>
      <FlatList
        data= {data}
        keyExtractor = { (x,i) => i }
        renderItem={ ({ item }) => 
        <Text 
          style={{ justifyContent: 'space-between',backgroundColor:'aliceblue' , fontSize: 18, paddingVertical: 20}}
          onPress = {
            () => {
              this.props.navigation.navigate('Second', {username: item.un})

            }
          }
        >
        {item.id}      {item.url}        {item.un}
        </Text>

        }
    />
    </View>
    );
  }
}
