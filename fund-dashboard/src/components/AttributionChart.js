import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, LineChart } from 'recharts';

const AttributionChart = ({ data }) => {
  // 归因分析数据格式示例
  const attributionData = [
    { month: 'Jan', assetReturn: 2.1, fxImpact: -0.3, feeImpact: -0.1, totalReturn: 1.7 },
    { month: 'Feb', assetReturn: 1.8, fxImpact: 0.2, feeImpact: -0.1, totalReturn: 1.9 },
    { month: 'Mar', assetReturn: -0.5, fxImpact: 0.4, feeImpact: -0.1, totalReturn: -0.2 },
    // ... 更多月份数据
  ];

  return (
    <div className="chart-container">
      <h3>月度归因分析</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={attributionData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="assetReturn" name="底层资产收益" fill="#8884d8" />
          <Bar dataKey="fxImpact" name="汇率影响" fill="#82ca9d" />
          <Bar dataKey="feeImpact" name="费用影响" fill="#ffc658" />
          <Line 
            type="monotone" 
            dataKey="totalReturn" 
            name="总收益" 
            stroke="#ff7300" 
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttributionChart;