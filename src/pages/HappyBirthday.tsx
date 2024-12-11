import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const HappyBirthday: React.FC = () => {
  return (
    <Container maxWidth="md" className="fade-in">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100svh' }}
        gap={2}
      >
        <Typography variant="h5" gutterBottom>
          🎉 Happy Birthday 🎉
        </Typography>

        <Typography variant="body1" width="90%">
          ようこそいらっしゃいました。<br />
          ここまでお付き合いいただき、ありがとうございます。遅ればせながら、お誕生日のお祝いとして宝探しのような遊び心をご用意させていただきました。<br />
          少しでも楽しんでいただけたら嬉しい限りです。<br />
          <br />
          送ったLofree Flow Liteは気に入っていただけたでしょうか？<br />
          キーボード沼の端っこに踏み入れた足が、どうか抜けなくなりますよう。<br />
        </Typography>

        <Typography variant="body1" width="90%">
          追伸）<br />
          流石にこちらまで辿り着いたらお知らせくださいね。私も喜びます。<br />
        </Typography>

        <Typography variant="body2" width="90%" className='MuiTypography-hiddenText'>
          これで終わりじゃないんでしょう？と思いますよねえ。とくに、何もないはずの場所なんて確かめたくなりませんか？<br />
        </Typography>

      </Box>
    </Container>
  );
};

export default HappyBirthday;
