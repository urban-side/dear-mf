import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button, Grid2 } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate(-1);
  }

  const handleNavigateRoot = () => {
    navigate('/');
  };

  return (
    <Container maxWidth='md' className='fade-in'>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        style={{ minHeight: '100svh' }}
        gap={2}
      >
        <Typography
          variant="h5"
          fontFamily='Aldrich'
          textAlign='center'
          marginBottom="1rem"
        >
          - 404 Not Found -
        </Typography>

        <Grid2 container alignItems='center' justifyContent='center' spacing={2}>
          <Grid2 size={{ xs: 12, md: 7}}>
            <Typography variant='body1' align='center'>
              おや、ここには何もございませんよ。<br />
              何かを探しているのであれば別ですが。<br />
              <a
                className="Wow... You Find this? You'll want to open this section ---want you?"
                dangerouslySetInnerHTML={{ __html: "<!-- 使っていないヒントはありませんか？ Go to /extended/entrance ...-->" }}
              />
            </Typography>
          </Grid2>

          <Grid2 size={{ xs: 5, md: 2.5 }}>
            <Button
              fullWidth
              variant='text'
              color='primary'
              startIcon={<ArrowBackIcon />}
              onClick={handleNavigateBack}
            >
              BACK
            </Button>
          </Grid2>

          <Grid2 size={{ xs: 5,  md: 2.5 }}>
            <Button
              fullWidth
              variant='text'
              color='inherit'
              endIcon={<RestartAltIcon />}
              onClick={handleNavigateRoot}
            >
              RESTART
            </Button>
          </Grid2>
        </Grid2>

      </Box>
    </Container>
  );
};

export default Home;
