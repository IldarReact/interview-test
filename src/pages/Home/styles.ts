import { Grid, GridProps } from '@mui/material';
import { styled, Typography } from '@mui/material';

export const StyledWrapper = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(4, 0), // Меньший padding на мобильных
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(8, 0),
  }
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '2rem', // Базовый размер для мобильных
  lineHeight: 1.2,
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
    lineHeight: 1.3,
  }
}));

export const StyledSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[700],
  fontSize: '1rem',
  lineHeight: 1.5,
  [theme.breakpoints.up('md')]: {
    fontSize: '1.1rem',
    lineHeight: 1.6,
  }
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(4),
  }
}));

export const StyledGridItem = styled(Grid)<GridProps>(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  '& .MuiTypography-h6': {
    fontSize: '1.1rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.25rem',
    }
  },
  '& .MuiTypography-body1': {
    fontSize: '0.9rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    }
  }
}));