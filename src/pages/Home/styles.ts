import { Grid, GridProps } from '@mui/material';
import { styled, Typography } from '@mui/material';

export const StyledWrapper = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(8, 0),
}));

export const StyledTitle = styled(Typography)({
  fontWeight: 'bold',
});


export const StyledSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[700],
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

export const StyledGridItem = styled(Grid)<GridProps>({
  padding: 16,
  border: '1px solid #d0d0d0',
  borderRadius: 4,
});
