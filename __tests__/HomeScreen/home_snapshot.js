import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import renderer from 'react-test-renderer';
import {Home} from '../../src/Pages/Home';

configure({adapter: new Adapter(), disableLifecycleMethods: true});
const homeWrapper = shallow(<Home />);

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));
jest.mock('react-native-push-notification', () => ({
  addEventListener: jest.fn(),
  requestPermissions: jest.fn(),
  then: jest.fn(),
}));
jest.mock('react-native-share', () => ({}));
jest.mock('react-native-video', () => 'Video');
jest.mock('react-native-pdf', () => 'Pdf');
const mockDispatch = jest.fn();

describe('test snapshot home', () => {
  it('test berhasil', async () => {
    const snapshot = renderer.create(<Home />);
  });
  it('test berhasil', async () => {
    expect(snapshot).toMatchSnapshot()
  });
});
