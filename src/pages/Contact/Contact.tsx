import { Container, Grid2, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { StyledForm, StyledInput, StyledButton } from './styles';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch('/.netlify/functions/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      alert(responseData.message);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again later.');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ flexGrow: 1, py: 8 }}>
      <Grid2 container spacing={4}>
        <Grid2 container spacing={4}>
          <Typography variant="h2" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            Fill out the form below to get in touch with us.
          </Typography>
        </Grid2>
        
        <Grid2 container spacing={4}>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <StyledInput
              {...register('name', { required: 'Name is required' })}
              label="Name"
              variant="outlined"
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
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <StyledInput
              {...register('message', { required: 'Message is required' })}
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              error={!!errors.message}
              helperText={errors.message?.message}
            />
            <StyledButton type="submit" variant="contained" color="primary">
              Submit
            </StyledButton>
          </StyledForm>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Contact;