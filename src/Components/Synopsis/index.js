import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

const Synopsis = data => {
  console.log(data);
  return (
    <View style={styles.container}>
        <Text style={styles.text}>DESCRIPTION</Text>
        <Text style={styles.text1}>{data.data.synopsis}</Text>
    </View>
  );
};

export default Synopsis;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d202b',
    padding: 15,
    borderRadius: 20,
    borderWidth:3,
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 25,
  },
  text1: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'justify',
  },
});
