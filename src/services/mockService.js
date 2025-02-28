import { USER_MAIN_DATA, USER_ACTIVITY /* etc. */ } from './mockData';

export async function getUserById(_id) {
  // Simule un call asynchrone
  return USER_MAIN_DATA;
}

export async function getUserActivity(_id) {
  return USER_ACTIVITY;
}

// etc. pour averageSessions, performance
