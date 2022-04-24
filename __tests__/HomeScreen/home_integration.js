import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {dummyAPIhome} from './dummyAPIhome';

const GetDataBook = async token => {
  try {
    const res= await axios.get('http://code.aldipee.com/api/v1/books', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    return res
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

  it('test berhasil', async () => {
    mock.onGet('http://code.aldipee.com/api/v1/books').reply(200,dummyAPIhome);
    const results = await GetDataBook('token');
    // console.log(results);
    // console.log(dummyAPIhome);
    expect(results.data).toEqual(dummyAPIhome);
  });
});
