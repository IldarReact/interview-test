import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { StyledLink } from './styles';

const Footer = () => {
  return (
    <Box component="footer" py={4} bgcolor="primary.main" color="white" textAlign="center">
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} My App. All rights reserved.{' '}
        <Link component={StyledLink} to="/contact">
          Contact
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;