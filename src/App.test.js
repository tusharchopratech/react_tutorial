import { fireEvent, render, screen } from '@testing-library/react';
import ReactTestUtils from 'react-dom/test-utils';
import '@testing-library/jest-dom';
// import App from './App';
import Login from './components/Login';

test('renders learn react link', () => {
  // const {getByTestId} = render(<Login />);
  render(<Login />);
  
  const usernameField = screen.getByTestId('username');
  expect(usernameField).toBeInTheDocument();

  const passwordField = screen.getByTestId('password');
  expect(passwordField).toBeInTheDocument();

  const signButton = screen.getByTestId('sign-in-button');
  expect(signButton).toBeInTheDocument();

  // ReactTestUtils.Simulate.change(usernameField, {target: {value: 'tushar'}});
  // ReactTestUtils.Simulate.input(usernameField, 'tushar');
  
  // let dd = getByTestId('username');
  // console.log(dd);

  // fireEvent.change(dd, {'target': {'value': 'tushar'}});
  // fireEvent.
  // const usernameField2 = screen.getByTestId('username');
  // console.log(usernameField2);

  // expect(usernameField2.target.value).toBe("test");
});
