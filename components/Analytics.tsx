import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Analytics = ({ performanceMetrics, audienceDemographics, earningsReports }) => {
  return (
    <div style={{ fontFamily: 'Lato, sans-serif', color: '#333' }}>
      <h2>Analytics and Insights</h2>
      <section>
        <h3>Performance Metrics</h3>
        <LineChart width={600} height={300} data={performanceMetrics}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="views" stroke="#8884d8" />
          <Line type="monotone" dataKey="likes" stroke="#82ca9d" />
          <Line type="monotone" dataKey="comments" stroke="#ffc658" />
        </LineChart>
      </section>
      <section>
        <h3>Audience Demographics</h3>
        <BarChart width={600} height={300} data={audienceDemographics}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="age" fill="#8884d8" />
          <Bar dataKey="gender" fill="#82ca9d" />
          <Bar dataKey="location" fill="#ffc658" />
        </BarChart>
      </section>
      <section>
        <h3>Earnings Reports</h3>
        <PieChart width={400} height={400}>
          <Pie
            data={earningsReports}
            cx={200}
            cy={200}
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {earningsReports.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </section>
    </div>
  );
};

export default Analytics;
