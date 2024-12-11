import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button, Link } from '@mui/material';
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
          Extended（3/3）
        </Typography>

        <Typography variant="body1" width="90%">
          まずは恒例の答え合わせから。
          最後ともなると簡単で、例の紙に書いてあったヒントの通り、日曜日の前を示していたのは「土曜日」。Saturdayが正解でした〜。<br />
        </Typography>

        <Typography variant="body1" width="90%">
          とは言ったものの、ここまで来ていただいてあれですが、正直もう渡せるものがないなあと。<br />
          そんなことを考えていましたが、あなたエンジニアではありませんか。<br />
        </Typography>

        <Typography variant="body1" width="90%">
          ということで、このサイトのソースをプレゼントします。<br />
        </Typography>
        <Link href="https://github.com/urban-side/dear-mf" underline="hover" target="_blank" rel="noopenner">
            { "https://github.com/urban-side/dear-mf" }
        </Link>
        <Typography variant='body1' width="90%">
          稚拙なコードなのはまあ置いといていただけると...<br />
          リファクタするもデバッグするも、はたまたリバースエンジニアリングするもご自由に...<br />
          <br />
          ではでは✋
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
