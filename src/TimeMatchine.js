import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import {dateFetchData} from '../actions/MyAction';
import {connect} from 'react-redux';
import {Spinner} from '../component/Spinner';
import Icon from 'react-native-vector-icons/Feather';
import Card from '../component/Card';
import TimeConversion from '../component/TimeConverison';
import ImageSelect from '../component/ImageSelect';
import CardSection from '../component/CardSection';
const TimeMatchine =({dateFetchData,lati,longi,date,dateData,isLoading,theme})=> {
useEffect(()=>{
    dateFetchData(
      lati,
       longi,
       date,
     );
  },[])
const {viewStyle, titleStyles} = Container;
   
    if (isLoading) {
      return <Spinner size="large" />;
    } else {
      return (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',

            backgroundColor:theme,
            flex: 1,
          }}>
          <Text style={titleStyles}>Welcome to You </Text>
          <Icon name="cloud-drizzle" size={120} color="#dc143c" />
          <TimeConversion allDateTime={dateData.currently.time} />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Card
              header="Humidity"
              value={dateData.currently.humidity}
              images={dateData.currently.icon}
            />
            <Card
              header="pressure"
              value={dateData.currently.pressure}
              images={dateData.currently.icon}
            />
            <Card
              header="WindSpeed"
              value={dateData.currently.windSpeed}
              images={dateData.currently.icon}
            />
            <Card
              header="Temprature"
              value={dateData.currently.temperature}
              images={dateData.currently.icon}
            />
            <Card
              header="DewPoint"
              value={dateData.currently.dewPoint}
              images={dateData.currently.icon}
            />
          </ScrollView>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={dateData.hourly.data}
            renderItem={({item}) => {
              return (
                <CardSection>
                  <TimeConversion allDateTime={item.time} />
                  <Text style={titleStyles}>Dewpoint:{item.dewPoint}</Text>
                  <Text style={titleStyles}>windSpeed:{item.windSpeed}</Text>
                  <ImageSelect img={item.icon} />
                </CardSection>
              );
            }}
          />
        </View>
      );
    }
  }

const mapStateToProps = ({dateRe, testRe, myTheme}) => {

  const {theme} = myTheme;
  const {lati, longi, loca, date} = dateRe;
  const {isLoading, dateData} = testRe;
  return {lati, longi, loca, date, isLoading, dateData, theme};
};
export default connect(
  mapStateToProps,
  {dateFetchData},
)(TimeMatchine);
const Container = StyleSheet.create({
  viewStyle: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  titleStyles: {
    fontSize: 18,
    alignSelf: 'center',
    paddingTop: 10,
    color: '#000000',
  },
});
