import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" py={4} bgcolor="primary.main" color="white" textAlign="center">
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} My App. All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;