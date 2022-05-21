import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  Button,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const logoIcon = <Icon name="camera-retro" size={60} color="#006FF9" />;
  const userIcon = <Icon name="user" size={30} color="#006FF9" />;
  const searchIcon = <Icon name="search" size={30} color="#006FF9" />;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            ...{backgroundColor: isDarkMode ? Colors.black : Colors.white},
            ...styles.viewWrapper,
          }}>
          {logoIcon}
          <Text style={styles.title}>Find Flickr image by contact name</Text>
          <View style={styles.viewAsRow}>
            <View style={{...styles.iconWithText, ...{marginRight: 30}}}>
              {userIcon}
              <Button
                title={`Contacts`}
                onPress={() => {
                  navigation.navigate('ContactsList');
                }}
              />
            </View>
            <View style={styles.iconWithText}>
              {searchIcon}
              <Button
                title={`Search`}
                onPress={() => {
                  navigation.navigate('Search');
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  iconWithText: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  viewAsRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 30,
  },
});

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
