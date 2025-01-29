import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const data = [
  { year: '2000', USA: 800, China: 100, Russia: 150 },
  { year: '2005', USA: 820, China: 300, Russia: 350 },
  { year: '2010', USA: 830, China: 850, Russia: 900 },
  { year: '2015', USA: 700, China: 1200, Russia: 1100 },
  { year: '2020', USA: 600, China: 1500, Russia: 1300 },
  { year: '2025', USA: 500, China: 1800, Russia: 1600 },
];

const NuclearTrendChart = () => {
  return (
    <div style={{ 
      padding: '2rem', 
      backgroundColor: '#1a1a1a', 
      borderRadius: '12px',
    }}>
      <h3 style={{ 
        textAlign: 'center', 
        color: '#ffcc00', 
        marginBottom: '2rem', 
        fontSize: '2.5rem',
        fontFamily: 'American Captain, sans-serif',
      }}>
        The Shifting Balance
      </h3>
      <ResponsiveContainer width="100%" height={600}>
        <LineChart
          data={data}
          margin={{
            top: 50,
            right: 50,
            left: 50,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis
            dataKey="year"
            stroke="#fff"
            tick={{ fontSize: 14, fill: '#fff' }}
            label={{
              value: 'Year',
              position: 'insideBottom',
              offset: -40,
              fill: '#fff',
              fontSize: 16,
              fontWeight: 'bold',
            }}
          />
          <YAxis
            domain={[0, 2000]}
            stroke="#fff"
            tick={{ fontSize: 14, fill: '#fff' }}
            label={{
              value: 'Nuclear Power Output (TWh)',
              angle: -90,
              position: 'insideLeft',
              fill: '#fff',
              fontSize: 16,
              fontWeight: 'bold',
            }}
          />
          <Tooltip
            contentStyle={{ 
              backgroundColor: '#333', 
              border: 'none', 
              borderRadius: '8px'
            }}
            labelStyle={{ color: '#ffcc00', fontSize: '16px' }}
            itemStyle={{ color: '#fff', fontSize: '14px' }}
          />
          <Legend
            wrapperStyle={{ fontSize: '16px' }}
            iconSize={20}
            iconType="circle"
            formatter={(value) => <span style={{ color: '#fff', fontSize: '16px' }}>{value}</span>}
          />
          <Line
            type="monotone"
            dataKey="USA"
            name="USA"
            stroke="#003366"
            strokeWidth={6}
            dot={{ r: 6 }}
            activeDot={{ r: 10 }}
          />
          <Line
            type="monotone"
            dataKey="China"
            name="China"
            stroke="#cc0000"
            strokeWidth={6}
            dot={{ r: 6 }}
            activeDot={{ r: 10 }}
          />
          <Line
            type="monotone"
            dataKey="Russia"
            name="Russia"
            stroke="#ffcc00"
            strokeWidth={6}
            dot={{ r: 6 }}
            activeDot={{ r: 10 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NuclearTrendChart;