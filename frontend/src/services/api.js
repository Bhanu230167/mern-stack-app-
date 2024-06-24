// frontend/src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchExamples = async () => {
  try {
    const response = await axios.get(`${API_URL}/examples`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};

export const createExample = async (exampleData) => {
  try {
    const response = await axios.post(`${API_URL}/examples`, exampleData);
    return response.data;
  } catch (error) {
    console.error('Error')
  }
}
