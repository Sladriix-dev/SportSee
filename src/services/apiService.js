import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export async function getUserById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/user/${id}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}

export async function getUserActivity(id) {
  try {
    const response = await axios.get(`${BASE_URL}/user/${id}/activity`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching user activity:', error);
    throw error;
  }
}

export async function getUserAverageSessions(id) {
  try {
    const response = await axios.get(`${BASE_URL}/user/${id}/average-sessions`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching average sessions:', error);
    throw error;
  }
}

export async function getUserPerformance(id) {
  try {
    const response = await axios.get(`${BASE_URL}/user/${id}/performance`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching user performance:', error);
    throw error;
  }
}
