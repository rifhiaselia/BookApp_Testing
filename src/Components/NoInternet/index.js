import {StyleSheet, Text, View, Image} from 'react-native';
import {unConnections} from '../../Assets/Image';
import React from 'react';

const NoInternet = () => {
  return (
    <View style={styles.unConnect}>
      <Image style={styles.unConimg} source={unConnections} />
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30}}>
        No Internet
      </Text>
    </View>
  );
};

export default NoInternet;

const styles = StyleSheet.create({
    unConnect: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D82148',
      },
      unConimg:{
        height:350,
        width:350,
      }
});
