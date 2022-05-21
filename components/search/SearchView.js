import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, SafeAreaView, ActivityIndicator} from 'react-native';
import Contacts from 'react-native-contacts';
import List from './List';
import SearchBar from './SearchBar';
import PropTypes from 'prop-types';

const SearchView = ({navigation}) => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    Contacts.getAll().then(contacts => {
      setContacts(contacts);
    });
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      {!clicked && <Text style={styles.title}>Contacts</Text>}

      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {!contacts ? (
        <ActivityIndicator size="large" />
      ) : (
        <List
          searchPhrase={searchPhrase}
          data={contacts}
          setClicked={setClicked}
          navigation={navigation}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    marginTop: 20,
    fontSize: 25,
    fontWeight: '600',
    marginLeft: '10%',
  },
});

SearchView.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SearchView;
