import React, {useEffect, useState, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  View,
  Linking,
  Alert,
  Button,
} from 'react-native';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  getImages,
  incrementIfOdd,
  selectCount,
  selectPhotos,
} from './counterSlice';

const supportedURL = "https://google.com";
const unsupportedURL = "slack://open?team=123456";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

export function Counter() {
  const count = useSelector(selectCount);
  const photos = useSelector(selectPhotos);
  const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  // const incrementValue = Number(incrementAmount) || 0;

  // const onSetIncrement = () => setIncrementAmount(prevCount => prevCount + 1);

  // const onPress = () => dispatch(increment());
  const onPress = () => dispatch(getImages({searchTag: "horse", pageNumber: "2"}));
  // const onOdd = () => dispatch(incrementIfOdd(incrementValue));

  useEffect(() => {
    console.log('### photos', photos);
  });

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.countContainer}></View>
        {photos.length > 1 ? (
          <View>
            <OpenURLButton url={`https://live.staticflickr.com/${photos[1].server}/${photos[1].id}_${photos[1].secret}.jpg`}>Open Image URL</OpenURLButton>
            {/* <Image
              source={{
                uri: `https://live.staticflickr.com/${photos[0].server}/${photos[0].id}_${photos[0].secret}_m.jpg`,
              }}
              style={{width: 120, height: 120}}
            /> */}
            {/* <Text>{photos[0].ownername}</Text>
            <Text>{photos[0].datetaken}</Text>
            <Text>{photos[0].description._content}</Text> */}
            {/* <Text>{ `https://live.staticflickr.com/${photos[1].server}/${photos[1].id}_${photos[1].secret}_m.jpg`}</Text> */}
            {/* <Image
              source={{
                uri: `https://live.staticflickr.com/${photos[1].server}/${photos[1].id}_${photos[1].secret}_m.jpg`,
              }}
              style={{width: 120, height: 120}}
            />
            <Text>{photos[1].ownername}</Text>
            <Text>{photos[1].datetaken}</Text>
            <Text>{photos[1].description._content}</Text> */}
          </View>
        ) : null}

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>get images</Text>
        </TouchableOpacity>
      </View>
      {/* <View>
      <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
      <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>
      
      
      </View> */}
      {/* <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text>Count: {count}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onOdd}>
          <Text>redux on odd</Text>
        </TouchableOpacity>
      </View> */}
      {/* <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text>Count: {incrementValue}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onSetIncrement}>
          <Text>component state</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});
