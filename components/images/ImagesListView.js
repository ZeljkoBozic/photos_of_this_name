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
  ActivityIndicator,
} from 'react-native';

import {
  getImages,
  selectPhotos,
  selectStatusIndicator,
  resetFlickrImages,
} from '../../thunks/imagesSlice';

const ImageListView = ({route}) => {
  const {nameTag} = route.params;
  const dispatch = useDispatch();
  const flickrImages = useSelector(selectPhotos);
  const statusIndicator = useSelector(selectStatusIndicator);

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getImages({searchTag: nameTag, pageNumber: page}));
    return () => {
      dispatch(resetFlickrImages());
    };
  }, []);

  useEffect(() => {
    if (images.length === 0) {
      setImages([...flickrImages]);
    }
    if (images.length > 0) {
      // We need to be sure that new fetch is not returning duplicate items to avoid conflicting key/id rule in List
      const mergedList = [...images, ...flickrImages];
      const uniqueList = mergedList.filter(
        // Filter images collection by unique id
        (img, index, self) => index === self.findIndex(i => i.id === img.id),
      );
      setImages(uniqueList);
    }
  }, [flickrImages]);

  const keyExtractor = item => {
    return item.id.toString();
  };

  const loadMore = () => {
    dispatch(getImages({searchTag: nameTag, pageNumber: page + 1}));
    setPage(page + 1);
  };

  const renderItem = ({item}) => {
    const {title, description, dateTaken} = item;
    const url = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`;
    {
      return statusIndicator === 'idle' ? (
        <View>
          <View style={styles.sectionContainer}>
            <View style={{flex: 2}}>
              <Text style={styles.sectionTitle}>{title || 'No Title'}</Text>
              <Text style={styles.sectionDate}>{dateTaken || '-'}</Text>
            </View>
            <View style={{flex: 1}}>
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
      ) : (
        <ActivityIndicator style={{margin: 30}} size="small" color="#0000ff" />
      );
    }
  };
  return (
    <FlatList
      data={[...images]}
      initialNumToRender={15}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.list}
      onEndReached={() => {
        if (!self.onEndReachedCalledDuringMomentum) {
          loadMore();
          self.onEndReachedCalledDuringMomentum = true;
        }
      }}
      onEndReachedThreshold={0.5}
      onMomentumScrollBegin={() => {
        self.onEndReachedCalledDuringMomentum = false;
      }}
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
    paddingVertical: 15,
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
