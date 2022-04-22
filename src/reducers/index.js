import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  GET_DATA_BOOK,
  DETAIL_BOOK,
  REFRESH,
  LOADING,
} from '../types';

const initialState = {
  userData: [],
  dataBook: [],
  detailBook: [],
  isRefresh: false,
  isLoading: false,
  isRegister: false,
  isLogin: false,
};
const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegister: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        isLogin: true,
      };

    case GET_DATA_BOOK:
      return {
        ...state,
        dataBook: action.payload,
      };

    case DETAIL_BOOK:
      return {
        ...state,
        detailBook: action.payload,
      };

    case REFRESH:
      return {
        ...state,
        isRefresh: action.payload,
      };

    case LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default Reducers;
