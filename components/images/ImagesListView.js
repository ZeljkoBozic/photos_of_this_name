import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableHighlight,
} from 'react-native';

import {getImages, selectPhotos} from '../counter/counterSlice';

const ImageListView = ({route, navigation}) => {
  const {nameTag} = route.params;
  const dispatch = useDispatch();
  const flickrImages = useSelector(selectPhotos);

  const [images, setImages] = useState([]);
  useEffect(() => {
    dispatch(getImages({searchTag: nameTag, pageNumber: '2'}));
  }, []);

  useEffect(() => {
    setImages(flickrImages);
  }, [flickrImages]);

  const keyExtractor = item => {
    return item?.id?.toString();
  };
  const renderItem = ({item}) => {
    const {title, description, dateTaken} = item;
    const url = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`;

    return (
      <View>
        <View style={styles.sectionContainer}>
          <View style={{flex: 2}}>
            <Text style={styles.sectionTitle}>{title || 'No Title'}</Text>
            <Text style={styles.sectionDate}>{dateTaken || '-'}</Text>
          </View>
          <View style={{ flex: 1}}>
          <TouchableHighlight onPress={() => Linking.openURL(url)}>
            <Image
              source={{
                uri: `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`,
              }}
              style={{width: 120, height: 120}}
            />
          </TouchableHighlight>

          </View>


        </View>

        <View>
          <Text style={styles.sectionDescription}>
            {description._content || 'No description'}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={images}
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
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 30,
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    paddingHorizontal: 30,
    fontSize: 14,
    fontWeight: '400',
  },
  sectionDate: {
    marginTop: 8,
    padding: 8,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default ImageListView;
