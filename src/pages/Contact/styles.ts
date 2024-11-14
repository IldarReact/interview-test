import { TextField, Button } from '@mui/material';
import styled from 'styled-components';

// Styled Form component
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  background-color: #ffffff; /* White background for minimalist look */
  padding: 2rem;
  border-radius: 8px; /* Subtle rounded corners */
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.15); /* Light shadow with blue tint */
  color: #333; /* Dark text for readability */

  // Mobile responsiveness
  @media (max-width: 600px) {
    max-width: 90%;
  }
`;

// Styled Button component
export const StyledButton = styled(Button)`
  text-transform: none;
  background-color: #007bff; /* Soft blue button */
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
    color: #ffffff;
  }

  &:active {
    background-color: #004085; /* Darkest blue when pressed */
  }
`;

// Styled Input component
export const StyledInput = styled(TextField)`
  width: 100%;
  
  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #007bff; /* Blue border on focus */
    }

    &:hover fieldset {
      border-color: #5c6ac4; /* Lighter blue border on hover */
    }

    fieldset {
      border-color: #c4c4c4; /* Default light gray border */
    }
  }

  .MuiInputLabel-root.Mui-focused {
    color: #007bff; /* Blue label when focused */
  }

  .MuiInputLabel-root {
    color: #808080; /* Light gray label color */
  }

  .MuiInputBase-input {
    color: #333; /* Dark text inside the input */
  }
`;
