import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GetDataBook, isLoading, isRefresh} from '../../actions';
import {Recommended, PopularBook, Loading} from '../../Components';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const userData = useSelector(state => {
    console.log('data user', state.appData.userData);
    return state.appData.userData;
  });

  const dataBook = useSelector(state => {
    console.log('Books: ', state.appData.dataBook);
    return state.appData.dataBook;
  });

  const isLoading = useSelector(state => state.appData.isLoading);
  const getRefresh = useSelector(state => state.appData.isRefresh);

  useEffect(() => {
    console.log(userData.tokens.access.token);
    dispatch(GetDataBook(userData.tokens.access.token));
  }, []);

  const Refresh = () => {
    dispatch(isRefresh(true));
    dispatch(GetDataBook(userData.tokens.access.token));
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
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={styles.textUp}>Holla, {userData.user.name} !!!</Text>

            <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={styles.mediahandling} onPress={() => navigation.navigate('VideoPlay')}>
                <Text>video play</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.mediahandling} onPress={() => navigation.navigate('PdfRead')}>
                <Text>pdf read</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.recommend}>
            <Text style={styles.title}>Recommended</Text>
            <Recommended data={dataBook} />
          </View>
          <View style={styles.popular}>
            <Text style={styles.title}>Popular Book</Text>
            <PopularBook data={dataBook} />
          </View>
        </ScrollView>
      </View>
    );
  } else {
    return <Loading />;
  }
};

export default Home;

const styles = StyleSheet.create({
  mediahandling:{
    height: 30,
    width: 70,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1d202b',
  },
  textUp: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  title: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  popular: {
    marginVertical: 10,
  },
});
