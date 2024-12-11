import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateEntrance = () => {
    navigate('/extended/entrance');
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
          Extended（1/3）
        </Typography>

        <Typography variant="body1" width="90%">
          ようこそ、クリア後のおまけページに。<br />
        </Typography>

        <Typography variant="body1" width="90%">
          表題に書いてある通り、ここはヒント①に関するページです。<br />
          ヒント①を全て使うので、あのツイートの使ってない文字をそのまま打てばOKでした。気付いたとしても半信半疑になりそうな文字列になったことは反省点でした。<br />
          まあ昔のゲームなんてこんなもんなので許してほしいですね（正当化）。<br />
        </Typography>

        <Typography variant="body1" width="90%">
          タイトルにもある通り、あと2ページほどあるので、改めてヒントを解いてみて欲しい。<br />
          <br />
          では次のページで✋
        </Typography>

        <Button
          variant='text'
          color='warning'
          startIcon={<HomeIcon />}
          onClick={handleNavigateEntrance}
          sx={{ marginTop: 1 }}
        >
          RETURN TO ex-ENTRANCE
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
