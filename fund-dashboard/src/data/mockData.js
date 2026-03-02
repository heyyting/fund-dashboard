// Mock data for the fund dashboard
export const mockFundData = {
  // Monthly subscription data by distributor
  subscriptions: [
    { month: '2026-01', distributor: 'Distributor A', amount: 5000000, currency: 'USD' },
    { month: '2026-01', distributor: 'Distributor B', amount: 3000000, currency: 'USD' },
    { month: '2026-01', distributor: 'Distributor C', amount: 2000000, currency: 'USD' },
    { month: '2026-02', distributor: 'Distributor A', amount: 6000000, currency: 'USD' },
    { month: '2026-02', distributor: 'Distributor B', amount: 3500000, currency: 'USD' },
    { month: '2026-02', distributor: 'Distributor C', amount: 2500000, currency: 'USD' },
    { month: '2026-03', distributor: 'Distributor A', amount: 7000000, currency: 'USD' },
    { month: '2026-03', distributor: 'Distributor B', amount: 4000000, currency: 'USD' },
    { month: '2026-03', distributor: 'Distributor C', amount: 3000000, currency: 'USD' }
  ],
  
  // Monthly performance data
  performance: [
    { month: '2026-01', nav: 10.5, return: 0.025, benchmarkReturn: 0.020 },
    { month: '2026-02', nav: 10.8, return: 0.028, benchmarkReturn: 0.025 },
    { month: '2026-03', nav: 11.2, return: 0.037, benchmarkReturn: 0.030 }
  ],
  
  // Underlying asset price movements
  underlyingAssets: [
    { date: '2026-01-31', price: 100.0, change: 0.0 },
    { date: '2026-02-28', price: 102.5, change: 0.025 },
    { date: '2026-03-31', price: 106.3, change: 0.037 }
  ],
  
  // Exchange rate data (USD/CNY)
  exchangeRates: [
    { date: '2026-01-31', rate: 7.15 },
    { date: '2026-02-28', rate: 7.18 },
    { date: '2026-03-31', rate: 7.22 }
  ],
  
  // Attribution analysis
  attribution: [
    { factor: 'Underlying Asset Performance', contribution: 0.032, percentage: 86.5 },
    { factor: 'Currency Impact', contribution: 0.003, percentage: 8.1 },
    { factor: 'Fees', contribution: -0.002, percentage: -5.4 },
    { factor: 'Cash Drag', contribution: 0.001, percentage: 2.7 }
  ],
  
  // Performance summary
  performanceSummary: {
    ytd: 0.092,
    itd: 0.120,
    threeMonth: 0.092,
    oneYear: 0.156,
    threeYear: 0.420
  }
};