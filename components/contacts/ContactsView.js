import React, {useEffect, useState} from 'react';
import ContactsList from './ContactsList';
// import Contact from './contact';
import Contacts from 'react-native-contacts';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

const ContactsView = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    Contacts.getAll().then(contacts => {
      console.log('### contacts ', contacts);
      setContacts(contacts);
    });
  }, []);

  return <ContactsList />;
};

const styles = StyleSheet.create({});

export default ContactsView;
