import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import LoginIcon from '@mui/icons-material/Login';
import sha256 from 'crypto-js/sha256';

interface SharedFormProps {
  buttonColor: 'primary' | 'secondary' | 'warning';
  textFieldColor?: 'primary' | 'secondary' | 'warning';
  labelText: string;
  helperText: string;
  buttonText: string;
  alertMessage: string;
  passwordMap: Record<string, string>;
  setHint?: React.ReactNode;
}

const SharedForm: React.FC<SharedFormProps> = ({
  buttonColor,
  textFieldColor,
  labelText,
  helperText,
  buttonText,
  alertMessage,
  passwordMap,
  setHint,
}) => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(helperText);
  const navigate = useNavigate();

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleLogin();
    }
  };

  const hashPassword = (password: string): string => {
    return sha256(password).toString();
  }

  const handleLogin = () => {
    setLoading(true);
    const randomDelay = Math.random() * 1000 + 500;

    setTimeout(() => {
      const trimmedLowerPassword = password.replace(/\s+/g, '').toLowerCase();
      console.log(trimmedLowerPassword);
      const hashedPassword = hashPassword(trimmedLowerPassword);
      if (passwordMap[hashedPassword]) {
        navigate(passwordMap[hashedPassword]);
      } else {
        setError(true);
        setErrorMessage(alertMessage);
      }
      setLoading(false);
    }, randomDelay);
  };

  return (
    <Container maxWidth="sm" className='fade-in'>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100svh' }}
        gap={2}
      >
        <TextField
          label={labelText}
          variant="standard"
          color={textFieldColor}
          type="password"
          fullWidth
          margin="normal"
          value={password}
          helperText={error ? errorMessage : helperText}
          error={error}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
            setError(false); // 入力が変更されたらエラーをリセット
            setErrorMessage(helperText);
          }}
          onKeyDown={handleKeyDown}
        />
        <LoadingButton
          variant="text"
          color={error ? 'error' : buttonColor}
          fullWidth
          endIcon={<LoginIcon />}
          onClick={handleLogin}
          loading={loading}
          loadingPosition='end'
        >
          {buttonText}
        </LoadingButton>
        { setHint }
      </Box>
    </Container>
  );
};

export default SharedForm;
