import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function TrendsTab() {
  const [animationKey, setAnimationKey] = useState(0);
  const [currentAnimatingWords, setCurrentAnimatingWords] = useState<number[]>([]);

  useEffect(() => {
    // Trigger animation every time component renders
    setAnimationKey(prev => prev + 1);
  }, []);

  useEffect(() => {
    // Animate words continuously every 1.5 seconds
    const interval = setInterval(() => {
      const totalWords = 32; // Total number of words in the array
      const randomWordIndex = Math.floor(Math.random() * totalWords);
      setCurrentAnimatingWords(prev => {
        const newSet = [...prev];
        if (!newSet.includes(randomWordIndex)) {
          newSet.push(randomWordIndex);
          // Remove word from animating set after animation completes
          setTimeout(() => {
            setCurrentAnimatingWords(current => current.filter(idx => idx !== randomWordIndex));
          }, 800);
        }
        return newSet;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  
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
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Trending Topics Word Cloud</h3>
        <div className="flex flex-wrap gap-3 justify-center items-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg">
          {[
            { text: 'cleanliness', size: 28, color: 'text-red-600' },
            { text: 'hygiene', size: 32, color: 'text-red-700' },
            { text: 'dirty', size: 24, color: 'text-red-500' },
            { text: 'food safety', size: 26, color: 'text-orange-600' },
            { text: 'inspection', size: 20, color: 'text-orange-500' },
            { text: 'violation', size: 22, color: 'text-red-600' },
            { text: 'complaint', size: 25, color: 'text-red-500' },
            { text: 'sanitation', size: 21, color: 'text-orange-600' },
            { text: 'customer experience', size: 18, color: 'text-gray-600' },
            { text: 'restaurant', size: 19, color: 'text-gray-500' },
            { text: 'McDonalds', size: 30, color: 'text-blue-600' },
            { text: 'Helsinki', size: 23, color: 'text-blue-500' },
            { text: 'slow service', size: 27, color: 'text-yellow-600' },
            { text: 'waiting time', size: 25, color: 'text-yellow-700' },
            { text: 'queue', size: 22, color: 'text-yellow-600' },
            { text: 'delay', size: 20, color: 'text-orange-500' },
            { text: 'staff', size: 19, color: 'text-gray-600' },
            { text: 'busy', size: 21, color: 'text-yellow-600' },
            { text: 'order', size: 18, color: 'text-gray-500' },
            { text: 'service quality', size: 24, color: 'text-yellow-700' },
            { text: 'feedback', size: 20, color: 'text-gray-600' },
            { text: 'sustainability', size: 29, color: 'text-green-600' },
            { text: 'eco friendly', size: 26, color: 'text-green-700' },
            { text: 'recycling', size: 23, color: 'text-green-500' },
            { text: 'green initiative', size: 25, color: 'text-emerald-600' },
            { text: 'packaging', size: 21, color: 'text-green-600' },
            { text: 'environment', size: 24, color: 'text-emerald-700' },
            { text: 'campaign', size: 22, color: 'text-blue-500' },
            { text: 'innovation', size: 20, color: 'text-purple-600' },
            { text: 'brand image', size: 23, color: 'text-blue-600' },
            { text: 'awareness', size: 19, color: 'text-indigo-600' },
            { text: 'positive', size: 26, color: 'text-green-600' }
          ].map((word, index) => (
            <motion.span
              key={`${index}-${animationKey}`}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ 
                opacity: currentAnimatingWords.includes(index) ? [1, 0.3, 1, 0.3, 1] : 1, 
                scale: currentAnimatingWords.includes(index) ? [1, 1.3, 1, 1.3, 1] : 1,
                y: 0 
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              className={`${word.color} font-medium cursor-default inline-block ${
                currentAnimatingWords.includes(index) ? 'animate-pulse' : ''
              }`}
              style={{ fontSize: `${word.size}px` }}
            >
              {word.text}
            </motion.span>
          ))}
        </div>
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
