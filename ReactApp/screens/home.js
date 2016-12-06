/**
 * Coming Soon
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
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native'

// App Globals
import AppStyles from '../styles'

// Components
import Button from '../components/button'

// Screens
import FirstLoad from './first.load'

/* Component ==================================================================== */
class Home extends Component {
  static componentName = 'Home' ;

  constructor(props) {
    super(props);

    this.state = {
      splashScreenVisible: this.props.showSplashScreen || false,
    }
  }

  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
    showSplashScreen: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
  }

  /**
    * Navigates to same scene (for Demo purposes)
    */

  _navigate = (navbarTitle) => {
    this.props.navigator.push({
      title: navbarTitle,
      component: FirstLoad,
      index: 2
    });
  }


  /**
    * Splash Screen - Skip
    */
  onSplashSkip = () => {
    this.setState({ splashScreenVisible: false })
  }

  /**
    * RENDER
    */
  render = () => {
    let text = this.props.placeholder || 'Time Check In! '

    // Done
    return (
      <View style={[AppStyles.container, AppStyles.containerCentered]}>
      <Image style={styles.image,{height:300,width:300}} source={
        require('../images/tctrans.png')}/>
        <Text style={[AppStyles.baseText, AppStyles.p]}>
          {text}
        </Text>

        <View style={[AppStyles.spacer_10]} />

      

        <Modal animationType={'fade'}
          transparent={false}
          visible={this.state.splashScreenVisible}
          onRequestClose={()=>{}}>
          <FirstLoad navigator={this.props.navigator}
            close={this.onSplashSkip} />
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

/* Export Component ==================================================================== */
export default Home
