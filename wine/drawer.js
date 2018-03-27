import React from 'react';
import { View, Text, Button, StyleSheet, Animated, Dimensions } from 'react-native';


export default class DrawerScreen extends React.Component {
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
          title= "HOME"
        />
        <Text style={{ paddingVertical: 15 }}>Drawer Screen</Text>
        



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