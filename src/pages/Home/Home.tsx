import { Container, Box, Stack, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import YouTubeEmbed from '../../components/YouTubeEmbed/YouTubeEmbed';
const Home = () => {

  return (
    <Container maxWidth="lg" sx={{ flexGrow: 1, py: 8 }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        alignItems="stretch"
      >
        <Box flex={1}>
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
        </Box>
        <Box
          flex={1}
          sx={{
            minHeight: { xs: '300px', md: '400px' },
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {/* YouTubeEmbed */}
          <YouTubeEmbed />

        </Box>
      </Stack>
    </Container>
  );
};

export default Home;
