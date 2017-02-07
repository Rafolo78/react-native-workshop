/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

import SplashPage from './scenes/SplashPage/SplashPage';
import FlexBox from './scenes/FlexBox/FlexBox';
// import InputField from './scenes/inputField';
import ROUTENAMES from './routes/routeNames';

export default class reactNativeWorkshop extends Component {

  configureScene(route) {
    if (route.sceneConfig) {
      return route.sceneConfig;
    }
    return Navigator.SceneConfigs.FloatFromRight;
  }

  renderScene(route, navigator) {
    if (route.id === ROUTENAMES.SPLASH_PAGE) {
      return <SplashPage navigator={navigator} />;
    }
    if (route.id === ROUTENAMES.FLEX_BOX) {
      return <FlexBox navigator={navigator} />;
    }
    return <FlexBox navigator={navigator} />;
  }

  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
    this.configureScene = this.configureScene.bind(this);
  }

  render() {
    return (
      <Navigator
        initialRoute={{ id: ROUTENAMES.SPLASH_PAGE, name: 'Index' }}
        renderScene={this.renderScene}
        configureScene={this.configureScene}
      />
    );
  }
}

AppRegistry.registerComponent('reactNativeWorkshop', () => reactNativeWorkshop);
