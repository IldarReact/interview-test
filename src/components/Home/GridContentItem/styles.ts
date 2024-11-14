import { Grid } from '@mui/material';
import { styled } from '@mui/material';

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