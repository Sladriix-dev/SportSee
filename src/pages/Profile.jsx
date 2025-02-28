import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById, getUserActivity, getUserAverageSessions, getUserPerformance } from '../services/apiService.js';
import DailyActivityChart from '../components/DailyActivityChart';
import AverageSessionsChart from '../components/AverageSessionsChart';
import PerformanceRadarChart from '../components/PerformanceRadarChart';
import ScoreRadialChart from '../components/ScoreRadialChart';
import KeyInfoCard from '../components/KeyInfoCard';

function Profile() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await getUserById(Number(id));
        const activity = await getUserActivity(Number(id));
        const sessions = await getUserAverageSessions(Number(id));
        const performance = await getUserPerformance(Number(id));

        setUserData(user);
        setActivityData(activity);
        setAverageSessions(sessions);
        setPerformanceData(performance);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="profile-container">
      {/* User Story #4 – Afficher le prénom */}
      <h1>Hello, {userData.userInfos.firstName}</h1>
      
      {/* (#5) */}

      <div className="charts-container">
        {/* User Story #11 – BarChart activité quotidienne */}
        <DailyActivityChart data={activityData.sessions} />

        {/* User Story #12 – LineChart durée sessions */}
        <AverageSessionsChart data={averageSessions.sessions} />

        {/* User Story #13 – RadarChart type activité */}
        <PerformanceRadarChart data={performanceData} />

        {/* User Story #14 – RadialBarChart score moyen */}
        <ScoreRadialChart score={userData.todayScore || userData.score} />
      </div>

      <div className="key-info-cards">
        {/* User Story #10 et #15 – Chiffres clés via API et affichage en card */}
        <KeyInfoCard type="calorie" value={userData.keyData.calorieCount} />
        <KeyInfoCard type="protein" value={userData.keyData.proteinCount} />
        <KeyInfoCard type="carbohydrate" value={userData.keyData.carbohydrateCount} />
        <KeyInfoCard type="lipid" value={userData.keyData.lipidCount} />
      </div>
    </div>
  );
}

export default Profile;
