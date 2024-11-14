import { Grid, GridProps } from '@mui/material';
import { styled, Typography } from '@mui/material';

export const StyledWrapper = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(4, 0), // Меньший padding на мобильных
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(8, 0),
  }
}));

