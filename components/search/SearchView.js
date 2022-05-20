import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import Contacts from 'react-native-contacts';
import List from "./List";
import SearchBar from "./SearchBar";

const SearchView = ({navigation}) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
        Contacts.getAll().then(contacts => {
            console.log('### contacts ', contacts);
            setContacts(contacts);
          });
  }, []);

  return (
    <SafeAreaView style={styles.root}>
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
            navigation = {navigation}
          />
        //   <ContactsList />
        
      )}
    </SafeAreaView>
  );
};

export default SearchView;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});