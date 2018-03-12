import React, { PureComponent, PropTypes } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class HomeScreen extends PureComponent {
  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{this.props.count}</Text>
        <TouchableOpacity onPress={() => this.props.increment(1)}>
          <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          <Text>Login Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatch = dispatch => ({
  increment: num => dispatch.count.increment(num),
});

export default connect(mapStateToProps, mapDispatch)(HomeScreen);
