import React from 'react';
import {StyleSheet, TextInput, View, Keyboard, Button} from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = props => {
  const searchIcon = <Icon name="search" size={30} color="#006FF9" />;
  return (
    <View style={styles.container}>
      <View
        style={
          !props.clicked ? styles.searchBarUnclicked : styles.searchBarClicked
        }>
        {searchIcon}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={props.searchPhrase}
          onChangeText={props.setSearchPhrase}
          onFocus={() => {
            props.setClicked(true);
          }}
        />
      </View>
      {props.clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              props.setSearchPhrase('');
              props.setClicked(false);
            }}></Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
  },
  searchBarUnclicked: {
    padding: 10,
    flexDirection: 'row',
    width: '95%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
  },
  searchBarClicked: {
    padding: 10,
    flexDirection: 'row',
    width: '80%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: '90%',
  },
});

SearchBar.defaultProps = {
  clicked: false,
  setSearchPhrase: '',
};

SearchBar.propTypes = {
  clicked: PropTypes.bool,
  setSearchPhrase: PropTypes.string,
  setClicked: PropTypes.func.isRequired,
};

export default SearchBar;
