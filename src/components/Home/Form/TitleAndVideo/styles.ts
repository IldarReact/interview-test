import { styled, Typography } from '@mui/material';

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