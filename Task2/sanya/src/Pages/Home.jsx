import { useState } from 'react';
import NewsList from '../components/NewsList';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Home({ category, setCategory }) {
  const handleChange = (event, newCategory) => {
    if (newCategory !== null) {
      setCategory(newCategory);
    }
  };

  return (
    <Box sx={{ textAlign: 'center', my: 4 }}>
      <Typography variant="h6" gutterBottom>
        Choose a news category:
      </Typography>

      <ToggleButtonGroup
        value={category}
        exclusive
        onChange={handleChange}
        aria-label="news category"
      >
        <ToggleButton value="Technology">Technology</ToggleButton>
        <ToggleButton value="Sports">Sports</ToggleButton>
        <ToggleButton value="Business">Business</ToggleButton>
      </ToggleButtonGroup>

      <NewsList category={category} />
    </Box>
  );
}