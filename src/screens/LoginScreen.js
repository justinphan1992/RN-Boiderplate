import React, { PureComponent, PropTypes } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class LoginScreen extends PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <Text>Home Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
