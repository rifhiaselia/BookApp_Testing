import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  GET_DATA_BOOK,
  DETAIL_BOOK,
  REFRESH,
  LOADING,
} from '../types';
import axios from 'axios';
import {ThemeProvider} from '@react-navigation/native';
import {Alert} from 'react-native';

//Action yang akan mentriger Reducer
export const registerSuccess = payload => ({
  type: REGISTER_SUCCESS,
  payload: payload,
});

//Register Success berfungsi untuk mengirim data dari API ke Reducer lalu di save Store
export const RegisterSuccess = (data, navigation) => async dispatch => {
  dispatch(isLoading(true));
  try {
    await axios
      .post('http://code.aldipee.com/api/v1/auth/register', data)
      .then(res => {
        console.log('Register Success');
        dispatch(registerSuccess(data));
        dispatch(isLoading(false));
        navigation.replace('Success')
      });
  } catch (error) {
    dispatch(isLoading(false));
    console.log(error);
  }
};

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload: payload,
});

export const LoginSuccess = (data, navigation) => async dispatch => {
  dispatch(isLoading(true));
  try {
    await axios
      .post('http://code.aldipee.com/api/v1/auth/login', data)
      .then(res => {
        console.log('Login Success');
        dispatch(loginSuccess(res.data));
        dispatch(isLoading(false));
        navigation.replace('Home')
      });
  } catch (error) {
    dispatch(isLoading(false));
    console.log(error);
  }
};

export const getDataBook = payload => ({
  type: GET_DATA_BOOK,
  payload: payload,
});
export const GetDataBook = token => async dispatch => {
  dispatch(isLoading(true));
  try {
    await axios
      .get('http://code.aldipee.com/api/v1/books', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(response => {
        console.log(response);
        dispatch(isLoading(false));
        dispatch(isRefresh(false));
        dispatch(getDataBook(response.data.results));
      });
  } catch (error) {
    dispatch(isLoading(false));
    console.log(error);
  }
};

export const detailBook = payload => ({
  type: DETAIL_BOOK,
  payload: payload,
});

export const DetailsBook = (token, id) => async dispatch => {
  
  try {
    dispatch(isLoading(true));
    await axios
      .get(`http://code.aldipee.com/api/v1/books/${id}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(response => {
        console.log(response.data);
        dispatch(isLoading(false));
        dispatch(isRefresh(false));
        dispatch(detailBook(response.data));
      });
  } catch (error) {
    console.log(error);
    dispatch(isLoading(false));
  }
};

export const isLoading = payload => ({
  type: LOADING,
  payload: payload,
});

export const isRefresh = payload => ({
  type: REFRESH,
  payload: payload,
});
