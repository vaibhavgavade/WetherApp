import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import WetherUpperButtons from '../component/WetherUpperButtons';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {fetchData} from '../actions/MyAction';
import Card from '../component/Card';
import CardSection from '../component/CardSection';
import ImageSelect from '../component/ImageSelect';
import {Spinner} from '../component/Spinner';
import TimeConversion from '../component/TimeConverison';
class WetherScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Settings',
      headerRight: (
        <TouchableOpacity
          style={{paddingRight: 20}}
          onPress={() => navigation.navigate('search')}>
          <Icon name="map-marker-alt" size={25} color="#008b8b" />
        </TouchableOpacity>
      ),
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25,
      },
     };
  };

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('willFocus', () => {
      this.fetchcalled();
    });
  }
  componentWillUnmount() {
    this.focusListener.remove();
  }
  fetchcalled() {
    this.props.fetchData(this.props.lat, this.props.long);
  }
  render() {
    const {textStyle, iconStyles} = Container;
    const {dataSource} = this.props;
    const {theme} = this.props;
    console.log('hhhhhhhh', theme);
    console.log(
      'lat is iiiiiiiiiiiiiiiiiiiiii',
      this.props.dataSource.latitude,
    );
    const {navigate} = this.props.navigation;
    
    if (this.props.isLoading) {
      return <Spinner size="large" />;
    } else {
      return (
        <View style={{backgroundColor: this.props.theme, flex: 1}}>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <WetherUpperButtons
            searchPress={() => this.fetchcalled()}
            settingPress={() => navigate('feature')}
          />
          <Icon
            style={iconStyles}
            name="cloud-sun-rain"
            size={150}
            color={this.props.AccentC}
          />
          {/* <Text style={titleStyles}>{this.props.loc}</Text> */}

          {/* <Text style={titleStyles}>{dataSource.daily.data[0].summary}</Text> */}
          {/* <Image source={ImageData.snowCloudy}/> */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Card
              header="Humidity"
              value={dataSource.currently.humidity}
              images={dataSource.currently.icon}
            />
            <Card
              header="Pressure"
              value={dataSource.currently.pressure}
              images={dataSource.currently.icon}
            />
            <Card
              header="windSpeed"
              value={dataSource.currently.windSpeed}
              images={dataSource.currently.icon}
            />
            <Card
              header="Temperature"
              value={dataSource.currently.temperature}
              images={dataSource.currently.icon}
            />
            <Card
              header="Ozone"
              value={dataSource.currently.ozone}
              images={dataSource.currently.icon}
            />
          </ScrollView>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={dataSource.daily.data}
            keyExtractor={kyes => kyes.dewPoint}
            renderItem={({item, index}) => {
              return (
                <CardSection>
                  <TimeConversion allDateTime={item.time} />
                  <Text style={textStyle}>
                    MaxTemp:{item.apparentTemperatureMax}
                  </Text>
                  <Text style={textStyle}>
                    MinTemp:{item.apparentTemperatureMin}
                  </Text>
                  <ImageSelect img={item.icon} />
                </CardSection>
              );
            }}
          />
        </View>
      );
    }
  }
}
const mapStateToProps = ({loaderRe, update, myTheme, accent}) => {
  console.log("Testing",myTheme)
  const {theme} = myTheme;
  const {dataSource, isLoading} = loaderRe;
  const {lat, long, loc} = update;
  const {AccentC} = accent;
  return {dataSource, isLoading, lat, long, loc, theme, AccentC};
};
export default connect(
  mapStateToProps,
  {fetchData},
)(WetherScreen);
export const Container = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    paddingTop: 10,
    paddingLeft: 10,
    alignSelf: 'center',
  },
  textViewStyle: {
    flexDirection: 'column',
  },
  careSctionStyle: {
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
  },
  imgStyle: {
    height: 50,
    width: 50,
  },
  iconStyles: {
    alignSelf: 'center',
  },
  titleStyles: {
    fontSize: 25,
    alignSelf: 'center',
    color: '#dc143c',
  },
});