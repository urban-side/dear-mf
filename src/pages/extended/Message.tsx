import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/birthday');
  }

  return (
    <Container maxWidth="md" className='fade-in'>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100svh' }}
        gap={2}
      >
        <Typography variant="h5" gutterBottom color='warning' paddingBottom={1}>
          Extended
        </Typography>

        <Typography variant="body1" width="90%">
          Welcome to the extended page. You are not allowed to access this page...?
        </Typography>

        <Button
          variant='text'
          color='primary'
          startIcon={<HomeIcon />}
          onClick={handleNavigateHome}
          sx={{ marginTop: 1 }}
        >
          RETURN TO HOME
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
