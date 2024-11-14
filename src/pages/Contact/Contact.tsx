import { Container, Grid, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { StyledForm, StyledInput, StyledButton } from './styles';
import { useHistory } from 'react-router-dom';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const history = useHistory();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await fetch('/.netlify/functions/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      history.push(`/thank-you/${data.name}`);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again later.');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ flexGrow: 1, py: 8 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={10} md={8}>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h1" paragraph align="center">
              Contact Us
            </Typography>
            <StyledInput
              {...register('name', { required: 'Name is required' })}
              label="Name"
              variant="outlined"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <StyledInput
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              label="Email"
              variant="outlined"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <StyledInput
              {...register('message', { required: 'Message is required' })}
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              error={!!errors.message}
              helperText={errors.message?.message}
            />
            <StyledButton type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </StyledButton>
          </StyledForm>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
