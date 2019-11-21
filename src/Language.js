import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import I18n from 'react-native-i18n';
import {strings} from '../locales/i18';
export default class AllFeatures extends Component {
  funcCalled = () => {
    this.forceUpdate();
    I18n.locale = 'he';
  };
  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text>{strings('Title.Home')}</Text>
        <Button title="Test Me" onPress={this.funcCalled} />
      </View>
    );
  }
}
