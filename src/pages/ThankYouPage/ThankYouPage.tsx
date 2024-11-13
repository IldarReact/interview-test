import { Container, Grid2, Typography } from '@mui/material';

interface ThankYouPageProps {
  name: string;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ name }) => {
  return (
    <Container maxWidth="lg" sx={{ flexGrow: 1, py: 8 }}>
      <Grid2 container spacing={4} justifyContent="center" alignItems="center">
        <Grid2 container spacing={4}>
          <Typography variant="h2" gutterBottom>
            Thank You, {name}!
          </Typography>
          <Typography variant="body1" paragraph>
            We appreciate your interest in our services. We will be in touch with you soon.
          </Typography>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default ThankYouPage;