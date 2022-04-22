import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

const Recommended = data => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {data.data?.map(item => (
          <View>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => navigation.navigate('BookDetail', {id: item.id})}>
              <Image
                style={styles.imagecover}
                source={{
                  uri: item.cover_image,
                }}
              />
              <View style={styles.text}>
                <Text style={styles.text1}>by {item.author}</Text>
                <Text style={styles.text2}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Recommended;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  imagecover: {
    height: 170,
    width: 115,
    borderRadius: 5,
    marginBottom: 11,
  },
  touchable: {
    width: 115,
    marginRight: 15,
  },
  text1: {
    color: '#ffffff',
    fontSize: 12,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  text2: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
});
