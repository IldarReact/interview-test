import { lazy, Suspense } from 'react';
import { Container, Box, Stack, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { StyledWrapper, StyledTitle, StyledSubtitle, StyledGrid, StyledGridItem } from './styles';

const YouTubeEmbed = lazy(() => import('../../components/YouTubeEmbed/YouTubeEmbed'));

const GridContentItem: React.FC<{ title: string; content: string }> = ({ title, content }) => (
  <StyledGridItem item xs={12} sm={6} md={4}>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body1" sx={{ textAlign: 'center', padding: '0 20px' }}>
      {content}
    </Typography>
  </StyledGridItem>
);

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const items = [
    { title: 'Title', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.' },
    { title: 'Title', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.' },
    { title: 'Title', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.' },
    { title: 'Title', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.' },
    { title: 'Title', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.' },
    { title: 'Title', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.' },
  ];

  return (
    <StyledWrapper>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="center" sx={{ mb: { xs: 3, md: 4 }, textAlign: { xs: 'center', md: 'left' } }}>
          <Box flex={1} sx={{ maxWidth: { xs: '100%', md: '400px' }, px: { xs: 2, md: 0 } }}>
            <StyledTitle variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' }, lineHeight: { xs: 1.2, md: 1.3 } }}>Most important title on the page</StyledTitle>
            <StyledSubtitle variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: { xs: 1.5, md: 1.6 } }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante
            </StyledSubtitle>
          </Box>
          <Box flex={1} sx={{ width: '100%', maxWidth: { xs: '100%', md: '560px' } }}>
            <Suspense fallback={<div>Loading...</div>}>
              <YouTubeEmbed videoId="dQw4w9WgXcQ" autoplay={false} showControls />
            </Suspense>
          </Box>
        </Stack>

        <Typography variant="h2" sx={{ textAlign: 'center', mb: { xs: 2, md: 3 }, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>Also very important title</Typography>

        <StyledGrid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
          {items.map(({ title, content }, index) => (
            <GridContentItem key={index} title={title} content={content} />
          ))}
        </StyledGrid>

        <Box display="flex" justifyContent="center" sx={{ mt: { xs: 3, md: 4 }, px: { xs: 2, md: 0 } }}>
          <Button component={Link} to="/contact" variant="contained" color="primary" fullWidth={isMobile} sx={{ maxWidth: isMobile ? 'none' : '200px' }}>
            Contact us
          </Button>
        </Box>

        <Box sx={{ mt: { xs: 4, md: 6 }, textAlign: 'center', padding: { xs: '1.5rem 1rem', md: '2rem 0' }, bgcolor: '#f9f9f9' }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' } }}>Less important title</Typography>
          <Button component={Link} to="/contact" variant="contained" color="primary" fullWidth={isMobile} sx={{ mt: 2, maxWidth: isMobile ? 'none' : '200px' }}>
            Contact us
          </Button>
        </Box>

        <Box sx={{ textAlign: 'center', py: { xs: 2, md: 3 }, mt: { xs: 3, md: 4 } }}>
          <Typography variant="body2" color="textSecondary">Some Company 2024</Typography>
        </Box>
      </Container>
    </StyledWrapper>
  );
};

export default Home;