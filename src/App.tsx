import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';

import Welcome from './pages/Welcome.tsx';
import Home from './pages/Home.tsx';
import HappyBirthday from './pages/HappyBirthday.tsx';
import ExtendedEntrance from './pages/extended/Entrance.tsx';
import Primus from './pages/extended/Hint1.tsx';
import Secundus from './pages/extended/Hint2.tsx';
import Tertius from './pages/extended/Hint3.tsx';
import ExtendedMessage from './pages/extended/Message.tsx';
import NotFound from './pages/404.tsx';

function App() {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = createTheme(
    {
      palette: {
        mode: isDarkMode ? 'dark' : 'light',
      },
      typography: {
        fontFamily: "'Sorts Mill Goudy', 'Klee One'",
      },
      components: {
        MuiTypography: {
          styleOverrides: {
            root: {
              // 特定のクラス名 ".MuiTypography-hiddenText" を持つ Typography コンポーネントにのみ適用
              '&.MuiTypography-hiddenText': {
                color: isDarkMode ? '#000' : '#fff', // ダークモードのときは黒、ライトモードのときは白
              },
            },
          },
        },
      },
    }
  );

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/birthday" element={<HappyBirthday />} />
          <Route path="/extended/entrance" element={<ExtendedEntrance />} />
          <Route path="/extended/notes" element={<Primus />} />
          <Route path="/extended/secundus" element={<Secundus />} />
          <Route path="/extended/development" element={<Tertius />} />
          <Route path="/extended/XXXXXX" element={<ExtendedMessage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
