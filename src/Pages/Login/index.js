import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {LogIn} from '../../Assets/Image';
import {useDispatch, useSelector} from 'react-redux';
import {LoginSuccess} from '../../actions';

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLogin = useSelector(state => {
    console.log('its login?', state.appData.isLogin);
    return state.appData.isLogin;
  });

  function kirimData() {
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    dispatch(LoginSuccess(data, navigation));
    // isLogin ? navigation.navigate('Home') : Alert.alert('Login Gagal');
  }

  return (
    <View style={styles.Container}>
      <Image style={styles.login} source={LogIn} />
      <TextInput
        testID="emaillogin"
        style={styles.text}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        secureTextEntry={true}
      />
      <TextInput
        testID="passwordlogin"
        style={styles.text}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      <Button testID="submitlogin" title="LOGIN" onPress={kirimData} />
      <Text style={styles.text2}>Don't have an account?</Text>
      <Button
        testID="gotoregister"
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  login: {
    marginTop: 45,
    marginHorizontal: 65,
    height: 200,
    width: 200,
    marginBottom: 50,
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
  text2: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 15,
    color: 'grey',
  },
});
