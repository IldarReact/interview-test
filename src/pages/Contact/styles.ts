import styled from 'styled-components';
import { TextField, Button } from '@mui/material';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const StyledInput = styled(TextField)`
  width: 100%;
`;

export const StyledButton = styled(Button)`
  text-transform: none;
`;