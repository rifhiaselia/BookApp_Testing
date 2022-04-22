import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, {useEffect} from 'react';
import {Back, Like, Share} from '../../Assets/Icons';
import {useDispatch, useSelector} from 'react-redux';
import {DetailsBook, isRefresh} from '../../actions';
import {Banner, Synopsis, notification, Loading} from '../../Components';
import ShareSocial from 'react-native-share';

const BookDetail = ({navigation, route}) => {
  //menerima id yang dikirim dari home
  const {id} = route.params;
  const dispatch = useDispatch();

  const userData = useSelector(state => {
    console.log('data user', state.appData.userData);
    return state.appData.userData;
  });

  const detailBook = useSelector(state => {
    console.log('Details Book: ', state.appData.detailBook);
    return state.appData.detailBook;
  });

  const isLoading = useSelector(state => state.appData.isLoading);
  const getRefresh = useSelector(state => state.appData.isRefresh);

  useEffect(() => {
    dispatch(DetailsBook(userData.tokens.access.token, id));
  },[]);

  const Refresh = () => {
    dispatch(isRefresh(true));
    dispatch(DetailsBook(userData.tokens.access.token, id));
  };

  const clickNotification = () => {
    notification.configure();
    notification.createChannel('1');
    notification.sendNotification(
      '1',
      'Notification',
      `you add a ${detailBook.title} to favorite book`,
    );
  };

  const onShare = async () => {
    const shareOptions = {
      message: `I think you'd like this story: ${detailBook.title} by ${detailBook.publisher} on D'Way only at the following link ${detailBook.cover_image}`,
    };

    try {
      await ShareSocial.open(shareOptions);
    } catch (err) {
      console.log('Error => ', err);
    }
  };

  if (!isLoading) {
    return (
      <View style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={getRefresh}
              onRefresh={() => Refresh()}
            />
          }>
          <View style={styles.icons}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={styles.icon1} source={Back} />
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={clickNotification}>
                <Image style={[styles.icon1, styles.like]} source={Like} />
              </TouchableOpacity>
              <TouchableOpacity onPress={onShare}>
                <Image style={styles.icon1} source={Share} />
              </TouchableOpacity>
            </View>
          </View>
          <Banner data={detailBook} />
          <Synopsis data={detailBook} />
        </ScrollView>
      </View>
    );
  } else{
    return <Loading/>
  }
};
export default BookDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#05070d',
    flex: 1,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginTop: 10,
  },
  icon1: {
    height: 35,
    width: 35,
  },
  like: {
    marginRight: 10,
  },
});
