import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  Button,
  View,
  StyleSheet,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const logoIcon = <Icon name="camera-retro" size={220} color="#006FF9" />;

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
          style={styles.viewWrapper}
          //   style={{
          //     backgroundColor: isDarkMode ? Colors.black : Colors.white,
          //   }}
        >
          {logoIcon}
          <View style= {styles.viewAsRow}>
          <View style= {{...styles.iconWithText, ...{marginRight: 30}}}>
            {userIcon}
            <Button
              title={`Contacts`}
              onPress={() => {
                navigation.navigate('ContactsList');
              }}
            />
          </View>
          <View style= {styles.iconWithText}>
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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  iconWithText: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 24,
    fontWeight: '600',
  },
  viewAsRow: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default HomeScreen;
