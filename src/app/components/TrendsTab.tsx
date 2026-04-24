import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { WordCloudChart } from './WordCloudChart';

export function TrendsTab() {
  const mentionsData = [
    { time: '00:00', mentions: 2 },
    { time: '04:00', mentions: 3 },
    { time: '08:00', mentions: 4 },
    { time: '12:00', mentions: 5 },
    { time: '16:00', mentions: 8 },
    { time: '18:00', mentions: 15 },
    { time: '20:00', mentions: 12 },
    { time: '22:00', mentions: 18 }
  ];

  const sentimentData = [
    { category: 'Hygiene Issue', negative: 18, neutral: 3, positive: 1 },
    { category: 'Service Quality', negative: 4, neutral: 8, positive: 2 },
    { category: 'Menu Items', negative: 1, neutral: 5, positive: 15 },
    { category: 'General', negative: 2, neutral: 12, positive: 8 }
  ];

  const wordCloudData = [
    // Hygiene related words
    { text: 'cleanliness', value: 70 },
    { text: 'hygiene', value: 92 },
    { text: 'dirty', value: 38 },
    { text: 'food safety', value: 50 },
    { text: 'inspection', value: 45 },
    { text: 'violation', value: 32 },
    { text: 'complaint', value: 20 },
    { text: 'sanitation', value: 30 },
    { text: 'customer experience', value: 30 },
    { text: 'restaurant', value: 40 },
    { text: 'McDonalds', value: 100 },
    { text: 'Helsinki', value: 55 },
    
    // Slow Service related words
    { text: 'slow service', value: 40 },
    { text: 'waiting time', value: 35 },
    { text: 'queue', value: 28 },
    { text: 'delay', value: 36 },
    { text: 'staff', value: 28 },
    { text: 'busy', value: 30 },
    { text: 'order', value: 32 },
    { text: 'service quality', value: 44 },
    { text: 'feedback', value: 30 },
    
    // Sustainability related words
    { text: 'sustainability', value: 40 },
    { text: 'eco friendly', value: 56 },
    { text: 'recycling', value: 45 },
    { text: 'green initiative', value: 40 },
    { text: 'packaging', value: 50 },
    { text: 'environment', value: 50 },
    { text: 'campaign', value: 30 },
    { text: 'innovation', value: 10 },
    { text: 'brand image', value: 10 },
    { text: 'awareness', value: 35 },
    { text: 'positive', value: 30 }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Mentions Over Time (Last 24 Hours)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mentionsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="time" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="mentions"
              stroke="#1F3A5F"
              strokeWidth={2}
              dot={{ fill: '#1F3A5F', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <span>🧠</span>
            <div>
              <p className="font-semibold text-red-900 text-sm">AI Insight</p>
              <p className="text-sm text-gray-700">
                Significant spike detected at 18:00-22:00. Increase correlates with hygiene issue coverage across multiple news sources and social media platforms.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Keywords</h3>
        <WordCloudChart data={wordCloudData} />
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sentiment Analysis by Topic</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={sentimentData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="category" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            />
            <Legend />
            <Bar dataKey="negative" fill="#ef4444" name="Negative" />
            <Bar dataKey="neutral" fill="#94a3b8" name="Neutral" />
            <Bar dataKey="positive" fill="#22c55e" name="Positive" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <span>🧠</span>
            <div>
              <p className="font-semibold text-purple-900 text-sm">AI Insight</p>
              <p className="text-sm text-gray-700">
                Hygiene issue dominates negative sentiment (82% of all negative mentions). Positive sentiment remains strong for menu items. Service quality shows mixed sentiment requiring attention.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Average Sentiment Score</p>
          <p className="text-3xl font-semibold text-gray-900">-2.4</p>
          <p className="text-xs text-red-600 mt-1">↓ -1.8 from previous period</p>
        </div>
        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg border border-cyan-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Total Reach (24h)</p>
          <p className="text-3xl font-semibold text-gray-900">220K</p>
          <p className="text-xs text-orange-600 mt-1">↑ +185K from previous period</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Engagement Rate</p>
          <p className="text-3xl font-semibold text-gray-900">4.2%</p>
          <p className="text-xs text-orange-600 mt-1">↑ +2.1% from previous period</p>
        </div>
      </div>

      <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
        <div className="flex items-start gap-2 mb-3">
          <span className="text-2xl">🎯</span>
          <div>
            <p className="font-semibold text-cyan-900">Key Recommendations</p>
          </div>
        </div>
        <ul className="space-y-2 ml-9 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-cyan-600">•</span>
            <span>Prioritize hygiene issue response - 82% of negative sentiment concentrated here</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600">•</span>
            <span>Leverage positive menu item sentiment in communications</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600">•</span>
            <span>Address service quality concerns to prevent sentiment deterioration</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600">•</span>
            <span>Monitor 18:00-22:00 time window - peak mention activity period</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
