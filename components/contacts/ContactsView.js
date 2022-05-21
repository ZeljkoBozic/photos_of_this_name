import React, {useEffect, useState} from 'react';
import ContactsList from './ContactsList';
import Contacts from 'react-native-contacts';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const ContactsView = ({navigation}) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    Contacts.getAll().then(contacts => {
      setContacts(contacts);
    });
  }, []);

  return <ContactsList navigation={navigation} />;
};

const styles = StyleSheet.create({});

ContactsView.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ContactsView;
