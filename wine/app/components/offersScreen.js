import React from 'react';
import { View, Text, Button, StyleSheet, Animated } from 'react-native';

import NavBar from './navbar';

export default class OfferScreen extends React.Component {
	static navigationOptions = {
	  header : null
	}

	render(){
		return(
			<View>
				<NavBar />
				<Text style = {{fontSize: 25}}>Offers</Text>
			</View>

		)
	}
}