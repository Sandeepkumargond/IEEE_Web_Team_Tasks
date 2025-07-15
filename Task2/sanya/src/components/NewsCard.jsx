// src/components/NewsCard.jsx
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { useState } from 'react';
export default function NewsCard({ article }) {
  const imageUrl = article.urlToImage || "https://via.placeholder.com/400x200?text=No+Image";

  return (
    <Card sx={{ maxWidth: 400, margin: '1rem auto', boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt={article.title}
      />

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {article.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {article.description || "No description available."}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          color="primary"
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More →
        </Button>
      </CardActions>
    </Card>
  );
}