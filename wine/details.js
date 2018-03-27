
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

import PictureBanner from './app/components/details/details';

export default class App extends Component<Props> {
  render() {
    return (
      <View>
        

      <Text>ANITA</Text>
       <PictureBanner />
       <ScrollView>
       
         
          </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
