import { Handler } from '@netlify/functions';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const formData: FormData = JSON.parse(event.body || '{}');
    console.log('Form data:', formData);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Thank you, ${formData.name}!` }),
    };
    
  } catch (error) {
    console.error('Error handling form submission:', error);
    return {
      statusCode: 500,
      body: 'There was an error processing your request. Please try again later.',
    };
  }
};

export { handler };