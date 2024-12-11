import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, TextField, Button, Grid2, List } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

const Home: React.FC = () => {
  const [path, setPath] = useState('');
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (path.trim() !== '') {
      navigate(`/${path}`); // 空白でない場合に遷移
    }
  };

  return (
    <Container maxWidth="sm" className="fade-in">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        style={{ minHeight: '100svh'}}
        gap={2}
      >
        <Typography variant="body1" gutterBottom>
          以下のヒントをもとに、正しいpathを入力してください。
        </Typography>

        <Typography variant="body2" fontFamily={'Klee One'}>
          <List>
            1. 2024-11-16T04:01のTweet[0] + 同じTweet[3]
          </List>
          <List>
            2. ⭐️ - ☀️
          </List>
          <List>
            3. 段ボールにメモがある
          </List>
        </Typography>

        <Grid2 container alignItems='flex-end' spacing={2} marginTop={2}>
          <Grid2 fontFamily='Aldrich' size={{xs: 5.5, md: 4}} textAlign="center">
            {window.location.host + '/'}
          </Grid2>
          <Grid2 size={{xs: 6.5, md: 5}}>
            <TextField
              label="path"
              variant="standard"
              value={path}
              onChange={(e) => setPath(e.target.value)}
              slotProps={{ input:
                { style: { fontFamily: 'Aldrich' }}
              }}
              onKeyDown={(e) => e.key === 'Enter' && handleNavigate()}
            />
          </Grid2>
          <Grid2 size={{xs: 12, md: 3}}>
            <Button
              fullWidth
              variant="text"
              color="primary"
              endIcon={<LoginIcon />}
              onClick={handleNavigate}
            >
              GO
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
};

export default Home;
