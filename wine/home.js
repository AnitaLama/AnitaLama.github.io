
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Image,
  ScrollView
} from 'react-native';

import SearchBar from './app/components/navbar/navbar';
import Nearby from './app/components/nearby/nearby';
import Offers from './app/components/offers/offers'

export default class App extends Component<Props> {
  render() {
    return (
      <View>
        


        <SearchBar />
       <ScrollView>
       <Offers />
        

         <Nearby />
      
         
          </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
