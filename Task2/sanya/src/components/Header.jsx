import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Box from '@mui/material/Box';

export default function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <NewspaperIcon sx={{ mr: 2 }} />

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          NewsNow by Sanya 🚀
        </Typography>

        {/* Optional: Add date or profile section */}
        <Box sx={{ fontSize: 14 }}>
          {new Date().toDateString()}
        </Box>
      </Toolbar>
    </AppBar>
  );
}