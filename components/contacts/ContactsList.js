import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Contacts from 'react-native-contacts';
import Contact from './Contact';
import PropTypes from 'prop-types';

const ContactsList = ({navigation}) => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    Contacts.getAll().then(contacts => {
      setContacts(contacts);
    });
  }, []);
  const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  };
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ImageList', {nameTag: item.givenName})
        }>
        <Contact contact={item} />
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={contacts}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.list}
    />
  );
};
const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

ContactsList.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ContactsList;
