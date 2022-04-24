import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {Back} from '../../Assets/Icons';
import {useDispatch, useSelector} from 'react-redux';
import {RegisterSuccess} from '../../actions';

const Register = ({navigation}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isRegister = useSelector(state => {
    return state.appData.isRegister;
  });

  function kirimData() {
    const dataObject = {
      name: name,
      email: email,
      password: password,
    };
    console.log('form', dataObject);
    dispatch(RegisterSuccess(dataObject, navigation));
    // isRegister ? navigation.navigate('Success') : Alert.alert('Register Gagal');
  }

  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.back} source={Back} />
      </TouchableOpacity>
      <Text style={styles.text1}>Create Account</Text>
      <View style={{marginTop: 10, marginBottom: 10}}>
        <TextInput
          testID="input-name"
          style={styles.text}
          placeholder="Full Name"
          value={name}
          onChangeText={text => setName(text)}
        />
        {/* <TextInput
          testID="input-email"
          style={styles.text}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        /> */}
        <TextInput
          testID="input-email"
          style={styles.text}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          secureTextEntry={true}
        />
        <TextInput
          testID="input-password"
          style={styles.text}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
      </View>
      <Button testID="submitregister" title="REGISTER" onPress={kirimData} />
      <Text style={styles.text2}>Log into existing account</Text>
      <Button title="LOGIN" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  back: {
    height: 40,
    width: 40,
    marginBottom: 10,
  },
  Container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  text: {
    borderWidth: 1,
    marginBottom: 10,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#DEE6EF',
  },
  text1: {
    fontSize: 30,
    marginBottom: 10,
    color: '#05070d',
    fontWeight: 'bold',
    padding: 10,
    marginTop: 15,
  },
  text2: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 15,
    color: '#05070d',
  },
});
