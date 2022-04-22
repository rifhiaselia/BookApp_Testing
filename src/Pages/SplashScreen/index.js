import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Logo} from '../../Assets/Image';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
      <Text style={styles.rsp} testID="Welcome">RIFHIA SELIA</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  logo: {
    height: 400,
    width: 400,
  },
  container: {
    flex: 1,
    backgroundColor: '#05070d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rsp: {
    marginTop: 90,
    color: 'white',
  },
});
