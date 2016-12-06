/**
 * Style Guide
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
  ScrollView
} from 'react-native'

// App Globals
import AppStyles from '../styles'

// Components
import Alerts from '../components/alerts'
import Button from '../components/button'
import ListRow from '../components/list.row'

/* Component ==================================================================== */
class Profile extends Component {
	static componentName = 'Profile';

  render = () => {
    return (
      <ScrollView automaticallyAdjustContentInsets={false}
        style={[AppStyles.container]}>

        <View style={[AppStyles.paddingVertical]}>
        	<View style={[AppStyles.paddingHorizontal]}>

	        	<Text style={[AppStyles.h1]}>Profile</Text>

            <View style={styles.center}>
            <Image style={styles.image,{height:100,width:100}} source={
              require('../images/user.png')}/></View>
              <Text style={[AppStyles.h2]}>Firstname</Text>
              <Text style={[AppStyles.h2]}>Lastame</Text>
            <Text style={[AppStyles.h2]}>Position</Text>
	        	<Text style={[AppStyles.h2]}>Salary</Text>

            </View>
            </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  center: {
    alignItems: 'center'
  },
});

/* Export Component ==================================================================== */
export default Profile
