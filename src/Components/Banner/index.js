import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React from 'react';

const Banner = data => {
  console.log(data);
  return (
    <View>
      {/* <ImageBackground
        style={styles.BGImg}
        imageStyle={{opacity: 0.5}}
        source={{
          uri: data.data.cover_image,
        }}>
           */}
      <View style={styles.container}>
        <Image
          style={styles.imagecover}
          source={{
            uri: data.data.cover_image,
          }}
        />

        <Text style={styles.title}>{data.data.title}</Text>
        <Text style={styles.author}>{data.data.author}</Text>

        <View style={styles.range}>
          <View style={styles.range1}>
            <Text style={styles.text1}>Rating</Text>
            <Text style={styles.text2}>{data.data.average_rating}</Text>
          </View>
          <View style={styles.range2}>
            <Text style={styles.text1}>Number of Pages</Text>
            <Text style={styles.text2}>{data.data.page_count}</Text>
          </View>
          <View style={styles.range3}>
            <Text style={styles.text1}>Buy</Text>
            <Text style={styles.text2}>Rp {data.data.price}</Text>
          </View>
        </View>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  BGImg: {
    height: '75%',
  },
  imagecover: {
    marginTop: 55,
    height: 300,
    width: 210,
    borderRadius: 10,
    marginBottom: 7,
  },
  title: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 25,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  author: {
    color: '#ffffff',
    fontSize: 18,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  range: {
    flexDirection: 'row',
    width: 330,
    height: 70,
    borderRadius: 15,
    backgroundColor: '#1d202b',
    marginTop: 10,
  },
  text1: {
    color: 'white',
    fontSize: 12,
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  range1: {
    borderRadius: 15,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
  },
  range2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    flex: 0.6,
    borderWidth: 0.5,
    borderRadius: 15,
  },
  range3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderWidth: 0.5,
    borderRadius: 15,
  },
});
