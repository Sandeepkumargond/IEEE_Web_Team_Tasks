import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NewsCard from "./NewsCard";

export default function NewsList({ category }) {
  const [articles, setArticles] = useState([]);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`;
    console.log("Using API Key:", apiKey);
    fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles || []));
  }, [category]);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h5" align="center" sx={{ mb: 3 }}>
        Top {category} Headlines 🗞️
      </Typography>

      {Array.isArray(articles) && articles.length > 0 ? (
        <Box display="flex" justifyContent="center">
          <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: 1200 }}>
            {articles.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <NewsCard article={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <Typography variant="body1" align="center" color="text.secondary">
          No news found for "{category}". Try a different category or check filters 🧐
        </Typography>
      )}
    </Container>
  );
}