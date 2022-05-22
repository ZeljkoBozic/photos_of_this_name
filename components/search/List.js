import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

/**
 * List and belonging Item components fro displaying Contacts trough Search
 */

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

const List = props => {
  const {navigation} = props;

  const renderItem = ({item}) => {
    // If there is no input, we want to show all contacts
    if (props.searchPhrase === '') {
      return (
        <Item
          name={item.givenName}
          familyName={item.familyName}
          navigation={navigation}
        />
      );
    }
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
    if (
      item.familyName
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
          keyExtractor={item => item.recordID}
        />
      </View>
    </SafeAreaView>
  );
};

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

List.defaultProps = {
  name: '',
  familyName: '',
};

List.propTypes = {
  name: PropTypes.string,
  familyName: PropTypes.string,
};

export default List;
