import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {dummyAPIregister} from './dummyAPIregister';

const RegisterSuccess = async token => {
  try {
    const res = await axios.post('http://code.aldipee.com/api/v1/auth/register');
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
      name:'Steve Jobss',
      email:'stevejobss@gmail.com',
      password:'steve123',
  }

  it('test berhasil', async () => {
    mock
      .onPost('http://code.aldipee.com/api/v1/auth/register')
      .reply(200, dummyAPIregister);
    const results = await RegisterSuccess(user);
    // console.log(results);
    // console.log(dummyAPIhome);
    expect(results.data).toEqual(dummyAPIregister);
  });
});
