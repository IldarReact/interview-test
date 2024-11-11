import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import YouTubeEmbed from '../../components/YouTubeEmbed/YouTubeEmbed';
import { StyledLink, StyledButton } from './styles';

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ flexGrow: 1, py: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" gutterBottom>
            Welcome to My App
          </Typography>
          <Typography variant="body1" paragraph>
            This is the home page of my app. Feel free to explore and learn more.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Contact Us
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <YouTubeEmbed videoId="dQw4w9WgXcQ" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;