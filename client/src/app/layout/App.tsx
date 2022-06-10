import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { Container } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import Catalog from '../../features/catalog/Catalog';
import Header from './Header';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212',
      },
    },
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
