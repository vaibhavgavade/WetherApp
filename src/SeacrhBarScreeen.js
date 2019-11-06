import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {SearchBar} from 'react-native-elements';
import {connect} from 'react-redux';
import {searchResult} from '../actions/MyAction';
import {changeLoc} from '../actions/MyAction';
import {Spinner} from '../component/Spinner';
const SearchBarScreen = ({
  navigation,
  searchResult,
  loaderLoading,
  data,
  changeLoc,
}) => {
  const [input, textInputChange] = useState('');
  const textChanging = text => {
    textInputChange(text);
  };
  const searchBarAction = () => {
    console.log('sercBar test');
    if (input.trim() === ' ') {
      return;
    } else {
      searchResult(input);
    }
  };
  function testing() {
    if (loaderLoading) {
      return <Spinner size="large" />;
    } else {
      console.log('test', data);
      console.log('test', data[0].display_name);

      return (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                changeLoc(item.lat, item.lon, item.display_name);
                navigation.navigate('two');
              }}>
              <Text style={{fontSize: 30}}>{item.display_name}</Text>
              <View
                style={{borderBottomWidth: 0.5, borderBottomColor: '#000000'}}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.lat}
        />
      );
    }
  }
  // render() {
  const {viewStyles, inputStyles, searchButton} = Container;

  return (
    <View>
      <View style={viewStyles}>
        <TextInput
          autoCorrect={false}
          placeholder="Enter the search text"
          onChangeText={textChanging}
          onSubmitEditing={searchBarAction}
          value={input}
        />
        <TouchableOpacity style={searchButton} onPress={searchBarAction}>
          <Icon name="md-search" size={30} color="#000000" />
        </TouchableOpacity>
      </View>
      {testing()}
    </View>
  );
};
// }
const mapStateToProps = ({search}) => {
  const {data, loaderLoading} = search;
  return {data, loaderLoading};
};
export default connect(
  mapStateToProps,
  {searchResult, changeLoc},
)(SearchBarScreen);
const Container = StyleSheet.create({
  viewStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 51,
    borderBottomWidth: 6,
    // marginVertical: 10,
    borderColor: '#008000',
    color: 'red',
    backgroundColor: 'red',
  },
  searchButton: {
    padding: 10,
    borderRadius: 5,
  },
});
