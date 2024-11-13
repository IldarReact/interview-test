import { Container, Box, Stack, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import YouTubeEmbed from '../../components/YouTubeEmbed/YouTubeEmbed';
import { StyledWrapper, StyledTitle, StyledSubtitle, StyledGrid, StyledGridItem } from './styles';

const Home = () => {
  const items = [
    {
      title: "Title",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam matti, leo et condimentum."
    },
    {
      title: "Title",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam matti, leo et condimentum."
    },
    {
      title: "Title",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam matti, leo et condimentum."
    },
    {
      title: "Title",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam matti, leo et condimentum."
    },
    {
      title: "Title",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam matti, leo et condimentum."
    },
    {
      title: "Title",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam matti, leo et condimentum."
    },
  ];

  const GridContentItem = ({ title, content }: { title: string; content: string }) => (
    <StyledGridItem item xs={12} sm={4}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1">{content}</Typography>
    </StyledGridItem>
  );

  return (
    <StyledWrapper>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="stretch">
          <Box flex={1}>
            <StyledTitle variant="h1" gutterBottom>
              Most important title on the page
            </StyledTitle>
            <StyledSubtitle variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante
            </StyledSubtitle>
            <Button component={Link} to="/contact" variant="contained" color="primary" sx={{ mt: 2 }}>
              Contact us
            </Button>
          </Box>
          <Box flex={1} sx={{ minHeight: { xs: '300px', md: '400px' }, display: 'flex', alignItems: 'center' }}>
            <YouTubeEmbed />
          </Box>
        </Stack>
        <StyledGrid container spacing={3}>
          {items.map((item, index) => (
            <GridContentItem key={index} title={item.title} content={item.content} />
          ))}
        </StyledGrid>
        <Box mt={4}>
          <Typography variant="h6">Less important title</Typography>
        </Box>
        <Button component={Link} to="/contact" variant="contained" color="primary" sx={{ mt: 2 }}>
          Contact us
        </Button>
      </Container>
    </StyledWrapper>
  );
};

export default Home;