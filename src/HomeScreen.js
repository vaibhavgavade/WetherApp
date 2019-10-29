import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from '../component/Button';
import Icon from 'react-native-vector-icons/FontAwesome5';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {viewStyle, textStyle} = Container;
    return (
      <View style={viewStyle}>
        <View>
          <Icon name="map-marker-alt" size={100} color="#dc143c" />
          <Icon
            style={{position: 'absolute', marginTop: 26, marginLeft: 45}}
            name="search-location"
            size={100}
            color="#1e90ff"
          />
        </View>
        <View style={{position: 'absolute', bottom: 50}}>
          <Button onPress={() => this.props.navigation.navigate('two')}>
            Go to Home
          </Button>
          <Text style={textStyle}>OR</Text>
          <Button>Detect Location</Button>
          <Text style={textStyle}>OR</Text>
          <Button onPress={() => this.props.navigation.navigate('search')}>
            Search Location
          </Button>
        </View>
      </View>
    );
  }
}

const Container = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 30,
    marginTop: 10
  },
});
export default HomeScreen;