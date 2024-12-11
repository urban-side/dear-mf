import React from 'react';
import SharedForm from '../components/SharedForm';
import { HASHED_YOUR_NAME } from '../config/constants';

const Login: React.FC = () => {
  const PASSWORD_MAP: Record<string, string> = {
    [HASHED_YOUR_NAME]: '/home',
  };
  return (
    <SharedForm
      buttonColor="primary"
      labelText='Enter your name'
      helperText="You are not an uninvited guest, are you?"
      buttonText="ENTER"
      alertMessage="招かれざるお客様かもしれません。お引き取りを。"
      passwordMap={PASSWORD_MAP}
    />
  );
};

export default Login;
