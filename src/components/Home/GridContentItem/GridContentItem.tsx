import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { StyledGrid, StyledGridItem } from './styles';


const GridContentItem = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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

  const items = [
    { title: 'Title', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.' },
    { title: 'Title', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.' },
    { title: 'Title', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.' },
    { title: 'Title', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.' },
    { title: 'Title', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.' },
    { title: 'Title', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.' },
  ];

  return (
    <>
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
    </>
  );
};
export default GridContentItem;