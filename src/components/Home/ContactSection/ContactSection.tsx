import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Box sx={{ mt: { xs: 4, md: 6 }, textAlign: 'center', padding: { xs: '1.5rem 1rem', md: '2rem 0' }, bgcolor: '#f9f9f9' }}>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' } }}>Less important title</Typography>
        <Button component={Link} to="/contact" variant="contained" color="primary" fullWidth={isMobile} sx={{ mt: 2, maxWidth: isMobile ? 'none' : '200px' }}>
          Contact us
        </Button>
      </Box>

      <Box sx={{ textAlign: 'center', py: { xs: 2, md: 3 }, mt: { xs: 3, md: 4 } }}>
        <Typography variant="body2" color="textSecondary">Some Company 2024</Typography>
      </Box>
    </>
  );
};

export default ContactSection;
