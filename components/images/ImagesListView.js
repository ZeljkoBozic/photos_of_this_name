import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList, View, Text, StyleSheet, Image} from 'react-native';
// import Contacts from 'react-native-contacts';
// import Contact from './Contact';
import {getImages, selectPhotos} from '../counter/counterSlice';

const ImageListView = () => {
  const dispatch = useDispatch();
  const flickrImages = useSelector(selectPhotos);
  // return (
  //     <View>
  //       <Text>Image list view</Text>
  //     </View>
  //   );
  const [images, setImages] = useState([]);
  useEffect(() => {
    dispatch(getImages({searchTag: 'horse', pageNumber: '2'}));
  }, []);

  useEffect(() => {
    setImages(flickrImages);
  }, [flickrImages]);

  const keyExtractor = item => {
    return item?.id?.toString();
  };
  const renderItem = ({item}) => {
    console.log('### image item ', item);
    const {title, description, dateTaken} = item;
    // return <Contact contact={item} />;
    return (
      <View>
        <View style={styles.sectionContainer}>
          <Image
            source={{
              uri: `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`,
            }}
            style={{width: 120, height: 120}}
          />
          <View>
          <Text style={styles.sectionTitle}>{title}</Text>
          <Text style={styles.sectionDescription}>{dateTaken}</Text>
          </View>
        </View>

        <View>
          
          <Text style={styles.sectionDescription}>{description._content}</Text>
          
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
    paddingHorizontal: 8,
    display: 'flex',
    flexDirection: 'row'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    padding: 8,
    fontSize: 14,
    fontWeight: '400',
  },
});

export default ImageListView;
