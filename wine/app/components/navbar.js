

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TextInput, ViewPropTypes
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class NavBar extends Component<Props> {
  render() {
    return (
      <View style = {styles.container}>
        <View style= {styles.leftNav}>
          <Text size={25}>AppName</Text>
        </View>
        <View style= {styles.rightNav}>
           <Icon
            name="search"
            size={25}
            color="#900c3e"
            style={styles.icon}
            onPress= {
              () => alert("Search button clicked")
            }
          />
           <Icon
            name="bars"
            size={25}
            color="#900c3e"
            style={styles.icon}
            onPress= {
              () => alert("Menu button clicked")
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    elevation: 5,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  iconBar:{
    flex: 1,

  },
  leftNav:{

  },
  rightNav:{
    flexDirection: 'row',
  },
  icon:{
    paddingLeft: 15,
  }
});

AppRegistry.registerComponent('SearchBar', () => SearchBar);
