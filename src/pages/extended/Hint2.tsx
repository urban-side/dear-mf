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
          Extended（2/3）
        </Typography>

        <Typography variant="body1" width="90%">
          ②のヒントの答え合わせ。全部使えということは、使ってない「日」= The Sunだった、ということ。<br />
          表記揺れに困ると思ったので、トリミングと小文字化を挟んでからチェックしています。<br />
          <br />
        </Typography>

        <Typography variant="body1" width="90%">
          クリア後に何かある、というのはどのゲームでも大体あるあるなんですが、その中でも開発中のボツネタをたくさん集めているのが結構好きなんですよね。
          わかりやすいところでいくと「ラチェット＆クランク」シリーズのツリーハウス、インソムニアックミュージアムがそれですね。<br />
          <br />
          ということで、今回の裏話などを置き土産としていくつか。<br />
        </Typography>

        <Typography variant="body1" width="90%">
          このサイトは思いついてから完成するまで大体1週間という突貫工事でした。<br />
          もともと、ReactとMaterial UIというフロントエンドの技術を触ろう、というノリで作りはじめたもので、ログイン機能はおろかサーバーに通信してすらないです。
          パスワード入れてログインする際のローディングは、１〜１.５秒のウェイトを入れているだけなんですよねえ。<br />
          思ったより楽しんでいただけていたら嬉しい限りです。<br />
          <br />
          残りのページでまた✋
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
