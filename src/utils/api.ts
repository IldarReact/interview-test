import { FormValues } from '../types';

export const submitForm = async (formData: FormValues) => {
    try {
        const response = await fetch('/.netlify/functions/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error submitting form:', error);
        throw error;
    }
};