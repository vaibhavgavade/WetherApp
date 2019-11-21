import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from '../component/Button';
import {connect} from 'react-redux';
import {CounterActionInc} from '../actions/MyAction';
import {CounterActionDec} from '../actions/MyAction';
class MyFile extends Component {
  IncreaseButton = () => {
    const {count} = this.props.count;
    this.props.CounterActionInc(count);
  };
  DecreaseButton = () => {
    const {count} = this.props.count;
    this.props.CounterActionDec(count);
  };
  wetherBtn = () => {
    return (
      <Button onPress={() => this.props.navigation.navigate('two')}>
        Wether
      </Button>
    );
  };
  render() {
    const {Container, textStyles, wetherbtnStyles} = Styles;
    const {count} = this.props;
    return (
      <View style={{flex: 1}}>
        <View style={Container}>
          <Button onPress={this.IncreaseButton}>Increment</Button>
          <Text style={textStyles}>{count}</Text>
          <Button onPress={this.DecreaseButton}>Decrement</Button>
        </View>

        <View style={wetherbtnStyles}>{this.wetherBtn()}</View>
      </View>
    );
  }
}
const mapStateToProps = ({data}) => {
  const {count} = data;
  return {count};
};

export default connect(mapStateToProps, {CounterActionInc, CounterActionDec})(
  MyFile,
);
const Styles = StyleSheet.create({
  Container: {
    marginTop: 100,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textStyles: {
    color: '#ff1493',
  },
  wetherbtnStyles: {
    marginTop: 100,
    height: 30,
    width: 100,
    alignSelf: 'center',
  },
});
