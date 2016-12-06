/**
 * First Load
 *
 * React Native Starter App
 * //
 */
'use strict';

/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native'

// App Globals
import AppStyles from '../styles'
import AppConfig from '../config'

// Components
import Button from '../components/button'

// Screens
import Form from './forms'

/* Component ==================================================================== */
class FirstLoad extends Component {
  static componentName = 'FirstLoad';

  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
    close: React.PropTypes.func.isRequired,
  }

	/**
	  * Navigates to Sign Up
	  */
	_navigate = () => {
     this.props.close();

	  this.props.navigator.push({
	    title: 'Time Check In!',
	    component: Form,
	  });
	}

  /**
    * RENDER
    */
  render = () => {
    return (
      <View style={[AppStyles.container, styles.containerCover]}>
      	<View style={[AppStyles.paddingHorizontal]}>
        <View style={styles.center}>
        <Image style={styles.image,{height:300,width:300}} source={
          require('../images/tctrans.png')}/>
          <Text style={[AppStyles.baseText, AppStyles.pp, AppStyles.centered,styles.texthead]}>
            Time Check In!
          </Text>
          </View>
          <View style={[AppStyles.spacer_10]} />

          <View style={[AppStyles.row]}>
          	<View style={[AppStyles.flex1, AppStyles.paddingRightSml]}>
		          <Button
		            text={'Sign Up/In Now'}
		            onPress={()=>this._navigate()} />
            </View>


      		</View>
      	</View>
      </View>
    );
  }
}

/* Styles ==================================================================== */
const styles = StyleSheet.create({
	containerCover: {
		marginTop: -AppConfig.navbarHeight,
		backgroundColor: "#FFF",
		justifyContent: 'center',
	},
  image: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  center: {
    alignItems: 'center'
  },
  texthead:{
    padding : 20
  }
});

/* Export Component ==================================================================== */
export default FirstLoad
