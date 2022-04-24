import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {dummyAPIlogin} from './dummyAPIlogin';

const LoginSuccess = async token => {
  try {
    const res = await axios.post('http://code.aldipee.com/api/v1/auth/login');
    return res;
  } catch (error) {
    console.log(error);
  }
};

describe('test API data buku', () => {
  let mock;
  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  const user={
      email:'stevejobss@gmail.com',
      password:'steve123',
  }

  it('test berhasil', async () => {
    mock
      .onPost('http://code.aldipee.com/api/v1/auth/login')
      .reply(200, dummyAPIlogin);
    const results = await LoginSuccess(user);
    // console.log(results);
    // console.log(dummyAPIhome);
    expect(results.data).toEqual(dummyAPIlogin);
  });
});
