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
} from 'react-native'

// App Globals
import AppStyles from '../styles'

// Components
import Button from '../components/button'

// Screens
import FirstLoad from './first.load'

/* Component ==================================================================== */
class Logout extends Component {
  static componentName = 'Logout';

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
    let text = this.props.placeholder || 'Check Out'

    // Done
    return (
      <View style={[AppStyles.container, AppStyles.containerCentered,styles.texthead]}>
        <Text style={[AppStyles.baseText, AppStyles.pp,styles.texthead]}>
          {text}
        </Text>

        <View style={[AppStyles.spacer_10]} />

        <Button type={'outlined'}
          text={'LogOut'}
          onPress={()=>this._navigate(text)} />

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
  texthead:{
    padding : 20
  }
});
/* Export Component ==================================================================== */
export default Logout
