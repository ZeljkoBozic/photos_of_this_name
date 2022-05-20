import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

// definition of the Item, which will be rendered in the FlatList

const Item = props => {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('ImageList', {nameTag: props.name})
        }>
        <Text style={styles.title}>{`${props.name} ${props.familyName}`}</Text>
      </TouchableOpacity>
    </View>
  );
};

// the filter
const List = props => {
  const {navigation} = props;

  const renderItem = ({item}) => {
    // const onPress = (name) => { console.log('### press ', name)}
    // when no input, show all

    if (props.searchPhrase === '') {
      return (
        <Item
          name={item.givenName}
          familyName={item.familyName}
          navigation={navigation}
        />
      );
    }
    x;
    if (
      item.givenName
        .toUpperCase()
        .includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
    ) {
      return (
        <Item
          name={item.givenName}
          familyName={item.familyName}
          navigation={navigation}
        />
      );
    }
    // filter of the description
    if (
      item.familyName
        .toUpperCase()
        .includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
    ) {
      return (
        <Item
          name={item.namgivenNamee}
          familyName={item.familyName}
          navigation={navigation}
        />
      );
    }
  };

  return (
    <SafeAreaView style={styles.listContainer}>
      <View
        onStartShouldSetResponder={() => {
          props.setClicked(false);
        }}>
        <FlatList
          data={props.data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
  item: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
  },
});
