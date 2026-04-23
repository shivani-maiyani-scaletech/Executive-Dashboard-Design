import { useState, useEffect } from 'react';
import { MessageSquare, TrendingUp, Radio, BarChart3, MessageCircle, Menu, Building2, MapPin, Tag } from 'lucide-react';
import { useNavigate } from 'react-router';
import { CrisisCard } from './CrisisCard';
import { MetricWidget } from './MetricWidget';
import { FilterBar } from './FilterBar';
import { MediaCoverageTab } from './MediaCoverageTab';
import { LiveMonitoringTab } from './LiveMonitoringTab';
import { TrendsTab } from './TrendsTab';
import { CrisesManagementTab } from './ResponseTab';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const mentionsTrendData = [
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
    { name: 'Positive', value: 22, color: '#22c55e' },
    { name: 'Neutral', value: 12, color: '#94a3b8' },
    { name: 'Negative', value: 8, color: '#ef4444' }
  ];

  const tabs = [
  { id: "overview", label: "Pulse" , icon: MessageSquare },
  { id: "response", label: "Crises Management", icon: MessageCircle },
  { id: "media", label: "Social Intelligence",  icon: TrendingUp },
  { id: "live", label: "Live Signals", icon: Radio },
  { id: "trends", label: "Trends & Analytics", icon: BarChart3 },
];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-[#1F3A5F] to-[#2a4a70] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-10">
              <img className="h-10 w-auto" src="https://www.kaiku.fi/hubfs/Dev%20assets/Layer%201.svg" height="153" width="200" alt=""></img>
              <div>
                <h1 className="text-3xl font-bold">PulseIQ</h1>
                <p className="text-blue-200 mt-1">From Signals to Decisions — Instantly</p>
              </div>
            </div>
              <button
                onClick={() => navigate('/works')}
                className="text-blue-200 cursor-pointer hover:text-white transition-colors underline underline-offset-4"
              >
                How it works?
              </button>
          </div>
        </div>
      </header>

      <FilterBar />

      <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={` cursor-pointer flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-[#1F3A5F] text-[#1F3A5F] font-semibold'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <section>
              <CrisisCard
                severity="critical"
                client="McDonald's Finland"
                title="Hygiene Issue – Helsinki Outlet"
                source="Helsinki Daily News"
                sourceType="News"
                published="2 hours ago"
                sentiment="Negative"
                reach="85K"
                mentions={5}
                reshares={4}
                aiSummary="Negative media coverage highlighting hygiene concerns at McDonald's Helsinki outlet, now spreading across multiple media sources and social channels."
                aiInsight="High negative sentiment + hygiene-related keywords + high reach + spike in media mentions detected."
                newsmentions={3}
                socialMentions={2}
                trendStatus="Spike Detected"
                trendLabel="Rapid increase in media coverage over last 2 hours"
                recommendation="Immediate response required. Prepare official statement and actively monitor media coverage."
                assignedTo="Anna"
                status="In Progress"
                engagement="1.2K"
                hashtags={["#cleanliness", "#foodsafety", "#brandreputation"]}
                worldCloud={["cleanliness", "hygiene", "dirty", "food safety", "inspection", "violation", "complaint", "sanitation", "customer experience", "restaurant", "McDonalds", "Helsinki"]}
              />

              <CrisisCard
                severity="attention"
                client="McDonald's Finland"
                title="Customer Experience – Slow Service Complaint"
                source="FoodBlog Finland"
                sourceType="Blog"
                published="5 hours ago"
                sentiment="Slightly Negative"
                reach="5K"
                mentions={2}
                reshares={1}
                aiSummary="Customer feedback highlighting slow service at McDonald's location with limited media visibility."
                aiInsight="Moderate negative sentiment related to customer experience with low reach and no significant spread."
                blogMentions={1}
                socialMentions={1}
                trendStatus="Stable"
                trendLabel="No unusual increase in mentions"
                recommendation="Monitor media coverage. No immediate escalation required."
                hashtags={["#service", "#customerexperience"]}
                engagement="0.8K"
                worldCloud={["slow service", "waiting time", "queue", "delay", "staff", "busy", "order", "customer experience", "service quality", "feedback", "complaint", "McDonalds"]}
              />

              <CrisisCard
                severity="positive"
                client="McDonald's Finland"
                title="Sustainability Campaign Coverage"
                source="Various Media Sources"
                sourceType="News"
                published="1 day ago"
                sentiment="Positive"
                reach="Medium"
                mentions={4}
                reshares={2}
                aiSummary="Positive media coverage around sustainability initiatives. McDonald's Finland's new recycling program receiving favorable attention from environmental journalists and social media influencers."
                newsmentions={2}
                socialMentions={2}
                recommendation="Leverage positive momentum. Consider amplifying sustainability messaging across owned channels."
                assignedTo="Mikko"
                status="Active"
                engagement="2.5K"
                hashtags={["#sustainability", "#recycling", "#environment"]}
                worldCloud={["sustainability", "eco friendly", "recycling", "green initiative", "packaging", "environmental", "campaign", "innovation", "brand image", "awareness", "positive", "McDonalds"]}
              />
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Media Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <MetricWidget
                  title="Total Mentions"
                  value="42"
                  icon={<MessageSquare className="w-5 h-5" />}
                  color="bg-blue-50"
                />
                <MetricWidget
                  title="Negative Mentions"
                  value="8"
                  icon={<TrendingUp className="w-5 h-5" />}
                  color="bg-red-50"
                />
                <MetricWidget
                  title="Total Reach"
                  value="220K"
                  icon={<Radio className="w-5 h-5" />}
                  color="bg-purple-50"
                />
                <MetricWidget
                  title="Avg Sentiment"
                  value="-2.4"
                  trend="↓ 1.8 from previous"
                  color="bg-orange-50"
                />
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Sentiment Distribution</h2>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex gap-4 mb-4">
                  {sentimentData.map((item) => (
                    <div key={item.name} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm text-gray-700">{item.name}: {item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 h-8">
                  {sentimentData.map((item) => (
                    <div
                      key={item.name}
                      className="rounded transition-all hover:opacity-80"
                      style={{
                        backgroundColor: item.color,
                        width: `${(item.value / 42) * 100}%`
                      }}
                      title={`${item.name}: ${item.value}`}
                    ></div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Mentions Trend (Last 24 Hours)</h2>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={mentionsTrendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="time" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="mentions"
                      stroke="#1F3A5F"
                      strokeWidth={2}
                      dot={{ fill: '#1F3A5F', r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <span>🧠</span>
                    <div>
                      <p className="font-semibold text-red-900 text-sm">Spike detected at 18:00-22:00</p>
                      <p className="text-sm text-gray-700">Increase driven by hygiene issue coverage across news and social media</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'media' && <MediaCoverageTab />}
        {activeTab === 'live' && <LiveMonitoringTab />}
        {activeTab === 'trends' && <TrendsTab />}
        {activeTab === 'response' && <CrisesManagementTab />}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center">
            <p className="text-sm text-gray-600">
              Powered by Scaletech
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}