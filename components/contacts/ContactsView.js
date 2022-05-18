import React, {useEffect, useState} from 'react';
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

export function ContactsView() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    Contacts.getAll().then(contacts => {
      console.log('### contacts ', contacts);
      setContacts(contacts);
    });
  }, []);

  return (
    <View>
      {contacts.map(contact => (
        <Text key={contact.recordID}>{contact.givenName}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
