import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header'; // adjust path if needed
import Home from './Pages/Home';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function App() {
  const [category, setCategory] = useState("Technology");

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
        <Home category={category} setCategory={setCategory} />
        <Box component="footer" mt={8} py={2} textAlign="center" bgcolor="#f5f5f5">
          <Typography variant="body2">
            NewsNow by Sanya 🚀
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default App;