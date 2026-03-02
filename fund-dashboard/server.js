const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for frontend development
app.use(cors());
app.use(express.json());

// Mock data - in production, this would connect to your actual database
const mockData = {
  // Monthly subscription data by distributor
  subscriptions: [
    { month: '2026-01', distributor: 'Distributor A', amount: 1500000, currency: 'USD' },
    { month: '2026-01', distributor: 'Distributor B', amount: 800000, currency: 'USD' },
    { month: '2026-02', distributor: 'Distributor A', amount: 1200000, currency: 'USD' },
    { month: '2026-02', distributor: 'Distributor B', amount: 950000, currency: 'USD' },
    { month: '2026-03', distributor: 'Distributor A', amount: 1800000, currency: 'USD' },
    { month: '2026-03', distributor: 'Distributor B', amount: 1100000, currency: 'USD' }
  ],
  
  // Monthly performance data
  performance: [
    { month: '2026-01', nav: 10.25, return: 0.025, ytd: 0.025, itd: 0.125 },
    { month: '2026-02', nav: 10.45, return: 0.0195, ytd: 0.045, itd: 0.145 },
    { month: '2026-03', nav: 10.65, return: 0.0191, ytd: 0.065, itd: 0.165 }
  ],
  
  // Attribution data (underlying asset vs FX impact)
  attribution: [
    { month: '2026-01', underlyingAssetReturn: 0.020, fxImpact: 0.005, totalReturn: 0.025 },
    { month: '2026-02', underlyingAssetReturn: 0.015, fxImpact: 0.0045, totalReturn: 0.0195 },
    { month: '2026-03', underlyingAssetReturn: 0.017, fxImpact: 0.0021, totalReturn: 0.0191 }
  ],
  
  // Exchange rates
  exchangeRates: [
    { date: '2026-01-31', rate: 7.15 },
    { date: '2026-02-28', rate: 7.18 },
    { date: '2026-03-31', rate: 7.20 }
  ]
};

// API endpoints
app.get('/api/subscriptions', (req, res) => {
  res.json(mockData.subscriptions);
});

app.get('/api/performance', (req, res) => {
  res.json(mockData.performance);
});

app.get('/api/attribution', (req, res) => {
  res.json(mockData.attribution);
});

app.get('/api/exchange-rates', (req, res) => {
  res.json(mockData.exchangeRates);
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});