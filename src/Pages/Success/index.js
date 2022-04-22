import {StyleSheet, Text, View, Button, Image} from 'react-native';
import React from 'react';
import {Confirm} from '../../Assets/Image';

const Success = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ROCK ON !!!</Text>
      <Image style={styles.confirm} source={Confirm} />
      <Text style={styles.text2}>
        You have successfully registration your account, now let's login your
        account!
      </Text>
      <Button
        title="Back to login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  confirm: {
    marginTop: 15,
    marginHorizontal: 65,
    height: 200,
    width: 200,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
    color: '#05070d',
    fontWeight:'bold', 
    padding: 10,
  },
  text2: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 20,
    color: 'grey',
    marginHorizontal:12,
    marginBottom: 30,
  },
});
