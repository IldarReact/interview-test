# Minimalist Contact Form with Styled Components

This project features a clean and minimalist contact form built with React, Material-UI, and Styled Components. The form follows a modern design approach with a color scheme of white and blue, providing a smooth and interactive user experience.

## Features

- **Responsive Design**: The form is optimized for mobile devices, adjusting its width based on the screen size.
- **Minimalist Aesthetic**: A simple, clean design with soft blue accents for interactive elements.
- **Styled Components**: The form, button, and input fields are styled using `styled-components`, enabling reusable and customizable styling.
- **Material-UI Integration**: Input fields are based on Material-UI components for accessibility and performance.

## Components

### `StyledForm`
This is the main wrapper for the contact form.

- **Background**: White background with a subtle blue shadow.
- **Padding**: 2rem of padding for comfortable spacing.
- **Border Radius**: Rounded corners for a smoother, modern look.
- **Responsive**: Adapts to mobile devices (max-width of 600px).

### `StyledButton`
A custom-styled button for form submission.

- **Background**: Blue button (`#007bff`) with white text.
- **Hover**: Darkens on hover to a deeper blue (`#0056b3`).
- **Active**: Darker blue on click (`#004085`).
- **Padding**: 12px vertical and 24px horizontal, with rounded corners.

### `StyledInput`
A custom-styled Material-UI input field.

- **Border**: Light gray by default, turns blue when focused or hovered.
- **Label**: Light gray label color with blue focus effect.
- **Input Text**: Dark color for better readability.
- **Responsive**: Adapts to form size, ensuring consistency on all devices.
