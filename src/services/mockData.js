export const USER_MAIN_DATA = {
    id: 12,
    userInfos: {
      firstName: 'Thomas',
      lastName: 'Dupont',
      age: 31
    },
    todayScore: 0.12,
    keyData: {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50
    }
  };
  
  export const USER_ACTIVITY = {
    userId: 12,
    sessions: [
      { day: '2020-07-01', kilogram: 80, calories: 240 },
      { day: '2020-07-02', kilogram: 80, calories: 220 },
      // ...
    ]
  };
  
  // etc. pour average-sessions, performance...
  