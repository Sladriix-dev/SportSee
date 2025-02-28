import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, Legend } from 'recharts';

function ScoreRadialChart({ score }) {
  const data = [{ name: 'score', value: score * 100 }]; // conversion en pourcentage
  return (
    <ResponsiveContainer width="100%" height={200}>
      <RadialBarChart data={data} innerRadius="70%" outerRadius="90%" startAngle={90} endAngle={450}>
        <RadialBar minAngle={15} background clockWise dataKey="value" fill="#8884d8" />
        <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={{ top: 0, left: 350 }} />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

export default ScoreRadialChart;
