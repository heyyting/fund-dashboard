import React, { useState, useEffect } from 'react';
import './App.css';
import FundPerformanceChart from './components/FundPerformanceChart';
import SubscriptionBreakdown from './components/SubscriptionBreakdown';
import AttributionAnalysis from './components/AttributionAnalysis';
import PerformanceMetrics from './components/PerformanceMetrics';

function App() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('ytd'); // ytd, itd, 3m

  useEffect(() => {
    // 模拟从API获取数据
    const fetchData = async () => {
      try {
        // 这里会连接到后端API
        const response = await fetch('/api/dashboard');
        const data = await response.json();
        setDashboardData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        // 使用模拟数据
        setDashboardData(getMockData());
        setLoading(false);
      }
    };
    
    fetchData();
  }, [timeRange]);

  const getMockData = () => {
    return {
      fundInfo: {
        name: "Global Feeder Fund",
        currency: "CNY",
        baseCurrency: "USD"
      },
      subscriptions: {
        monthly: [
          { month: "2026-02", total: 15000000, distributors: [
            { name: "Distributor A", amount: 8000000 },
            { name: "Distributor B", amount: 5000000 },
            { name: "Distributor C", amount: 2000000 }
          ]},
          { month: "2026-01", total: 12000000, distributors: [
            { name: "Distributor A", amount: 7000000 },
            { name: "Distributor B", amount: 4000000 },
            { name: "Distributor C", amount: 1000000 }
          ]}
        ]
      },
      performance: {
        monthlyReturns: [
          { month: "2026-02", return: 2.5, benchmark: 2.1 },
          { month: "2026-01", return: -1.2, benchmark: -1.5 },
          { month: "2025-12", return: 3.8, benchmark: 3.2 }
        ],
        ytd: 4.2,
        itd: 15.8,
        threeMonth: 5.1
      },
      attribution: {
        underlyingAsset: 3.2, // 底层资产贡献
        fxImpact: 0.8,       // 汇率影响
        fees: -0.3,          // 费用影响
        other: 0.5           // 其他因素
      },
      underlyingFund: {
        priceHistory: [
          { date: "2026-02-28", price: 105.2 },
          { date: "2026-01-31", price: 102.5 },
          { date: "2025-12-31", price: 103.8 }
        ],
        currency: "USD"
      },
      fxRates: {
        history: [
          { date: "2026-02-28", rate: 7.25 },
          { date: "2026-01-31", rate: 7.18 },
          { date: "2025-12-31", rate: 7.12 }
        ]
      }
    };
  };

  if (loading) {
    return <div className="loading">Loading dashboard data...</div>;
  }

  return (
    <div className="App">
      <header className="app-header">
        <h1>{dashboardData.fundInfo.name} Dashboard</h1>
        <div className="time-range-selector">
          <button 
            className={timeRange === 'ytd' ? 'active' : ''}
            onClick={() => setTimeRange('ytd')}
          >
            YTD
          </button>
          <button 
            className={timeRange === 'itd' ? 'active' : ''}
            onClick={() => setTimeRange('itd')}
          >
            ITD
          </button>
          <button 
            className={timeRange === '3m' ? 'active' : ''}
            onClick={() => setTimeRange('3m')}
          >
            Last 3M
          </button>
        </div>
      </header>

      <main className="dashboard-grid">
        <PerformanceMetrics 
          performance={dashboardData.performance} 
          timeRange={timeRange}
        />
        
        <FundPerformanceChart 
          monthlyReturns={dashboardData.performance.monthlyReturns}
          underlyingPrices={dashboardData.underlyingFund.priceHistory}
          fxRates={dashboardData.fxRates.history}
        />
        
        <SubscriptionBreakdown 
          subscriptions={dashboardData.subscriptions.monthly}
        />
        
        <AttributionAnalysis 
          attribution={dashboardData.attribution}
        />
      </main>
    </div>
  );
}

export default App;