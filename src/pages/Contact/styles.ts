import styled from 'styled-components';
import { TextField, Button } from '@mui/material';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;  
  max-width: 350px; 
  margin: 0 auto; 
  
  @media (max-width: 600px) {
    max-width: 90%; 
  }
`;

export const StyledInput = styled(TextField)`
  width: 100%;
`;

export const StyledButton = styled(Button)`
  text-transform: none;
`;
