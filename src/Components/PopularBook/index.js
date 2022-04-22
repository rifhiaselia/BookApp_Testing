import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

const PopularBook = data => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          {data.data?.map(item => (
            <View style={styles.box}>
              <TouchableOpacity
                style={styles.touchable}
                onPress={() =>
                  navigation.navigate('BookDetail', {id: item.id})
                }>
                <Image
                  style={styles.imagecover}
                  source={{
                    uri: item.cover_image,
                  }}
                />
                <View style={styles.text}>
                  <Text style={styles.text1}>{item.title}</Text>
                  <Text style={styles.text2}>by {item.author}</Text>
                  <View style={styles.intext}>
                    <View style={styles.intext1}>
                      <Text style={styles.text3}>Rating :</Text>
                      <Text style={styles.text4}>{item.average_rating}</Text>
                    </View>
                    <View style={styles.intext1}>
                      <Text style={styles.text3}>Publisher : </Text>
                      <Text style={styles.text5}>{item.publisher}</Text>
                    </View>
                  </View>
                  <View style={styles.range}>
                    <Text style={styles.text6}>Rp  {item.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View>
                <Button
                  style={styles.button}
                  title="Details"
                  onPress={() =>
                    navigation.navigate('BookDetail', {id: item.id})
                  }
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default PopularBook;

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 6,
    backgroundColor: '#05070d',
  },
  imagecover: {
    height: 170,
    width: 115,
    borderRadius: 8,
    marginVertical: 7,
    marginHorizontal: 7,
  },
  touchable: {
    width: 115,
    marginRight: 15,
    flexDirection: 'row',
  },
  text: {
    marginTop: 12,
    marginLeft: 10,
  },
  text1: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 21,
    flexWrap: 'wrap',
    width: 170,
  },
  text2: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 17,
    flexWrap: 'wrap',
  },
  intext: {
    flexDirection: 'row',
    marginTop: 2,
  },
  text3: {
    color: 'white',
    fontSize: 11,
  },
  text4: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'grey',
    marginLeft: 2,
  },
  text5: {
    fontWeight: 'bold',
    fontSize: 13,
    color: 'grey',
    marginLeft: 2,
  },
  intext1: {
    marginVertical: 3,
    flex: 0.5,
  },
  
  text6: {
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'grey',
  },
});
