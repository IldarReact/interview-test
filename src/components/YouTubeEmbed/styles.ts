import { styled } from '@mui/material/styles';

export const PlayerContainer = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: { // Mobile devices
    padding: theme.spacing(1),
  }
}));

export const PlayerWrapper = styled('div')(({ theme }) => ({
  background: theme.palette.common.black,
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  boxShadow: theme.shadows[1],
  [theme.breakpoints.down('sm')]: {
    borderRadius: 0, // Full width on mobile
    boxShadow: 'none',
  }
}));

export const VideoContainer = styled('div')({
  position: 'relative',
  paddingBottom: '56.25%', // 16:9 aspect ratio
  height: 0,
  overflow: 'hidden',
});

export const VideoFrame = styled('iframe')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  border: 0,
});

export const ErrorContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  background: theme.palette.background.paper,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  }
}));

export const ErrorText = styled('p')(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
  fontSize: '1rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem',
  }
}));

export const ErrorLink = styled('a')(({ theme }) => ({
  color: theme.palette.error.main,
  textDecoration: 'none',
  fontSize: '1rem',
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    textDecoration: 'underline',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem',
    padding: theme.spacing(0.5, 1),
  }
}));