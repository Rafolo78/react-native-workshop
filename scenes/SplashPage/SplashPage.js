import React, { Component } from 'react';
import { View, Text } from 'react-native';

import ROUTENAMES from '../../routes/routeNames';
import styles from './SplashPageStyles';

export default class SplashPage extends Component {

  componentWillMount() {
    const navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: ROUTENAMES.FLEX_BOX,
      });
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>hola</Text>
      </View>
    );
  }
}

SplashPage.propTypes = {
  navigator: React.PropTypes.element.isRequired,
};
