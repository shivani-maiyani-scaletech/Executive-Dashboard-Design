import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft,Zap,ArrowRight, Database, Settings, Brain, Target, TrendingUp, AlertCircle, FileText, Activity, CheckCircle, MessageSquare, BarChart3  } from 'lucide-react';
import flowchart from '../../assets/flowchart.png';

export function HowItWorks() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('architecture');

  const tabs = [
    { id: 'architecture', label: 'System Architecture', icon: Settings },
    { id: 'intelligence', label: 'Intelligence Process Flow', icon: Brain }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-[#1F3A5F] to-[#2a4a70] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center">
            <div className="flex items-center gap-4 w-1/3">
              <button
                onClick={() => navigate('/dashboard')}
                className="flex cursor-pointer items-center gap-2 text-blue-200 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to PulseIQ
              </button>
            </div>
            <div className='flex items-center justify-center w-1/3'>
              <h1 className="text-3xl font-bold">How It Works</h1>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex cursor-pointer items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
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
        {activeTab === 'architecture' && (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Kaiku System Architecture
          </h1>
          <p className="text-xl text-slate-600 italic">
            "From raw media data to actionable communication decisions"
          </p>
        </div>

        {/* Main Flow Container */}
        <div className="space-y-6">

          {/* Section 1: Data Sources */}
          <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-blue-900">1. DATA SOURCES (INPUT)</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4 shadow">
                <h3 className="font-semibold text-blue-800 mb-2">Meltwater Integration</h3>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• News</li>
                  <li>• Social Media</li>
                  <li>• Blogs</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 shadow">
                <h3 className="font-semibold text-blue-800 mb-2">Data Types</h3>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Mentions</li>
                  <li>• Sentiment</li>
                  <li>• Reach & Engagement</li>
                  <li>• Keywords</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-100 border-l-4 border-blue-600 p-3 rounded">
              <p className="text-sm font-semibold text-blue-900">
                💡 Value: "All communication data is centralized in one place"
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="w-8 h-8 text-slate-400" />
          </div>

          {/* Section 2: Data Ingestion */}
          <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-blue-900">2. DATA INGESTION</h2>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4 shadow text-center">
                <Activity className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-sm">API / Polling</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow text-center">
                <Database className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-sm">Data Storage</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow text-center">
                <Settings className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-sm">Client Filtering</p>
              </div>
            </div>

            <div className="bg-blue-100 border-l-4 border-blue-600 p-3 rounded">
              <p className="text-sm font-semibold text-blue-900">
                💡 Value: "No manual tracking required"
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="w-8 h-8 text-slate-400" />
          </div>

          {/* Section 3: Processing / Intelligence */}
          <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-8 h-8 text-purple-600" />
              <h2 className="text-2xl font-bold text-purple-900">3. PROCESSING / INTELLIGENCE (CORE LOGIC)</h2>
            </div>

            <div className="bg-yellow-100 border-l-4 border-yellow-600 p-3 rounded mb-4">
              <p className="text-sm font-semibold text-yellow-900">
                👉 This is your main system (NO AI here)
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4 shadow border-l-4 border-purple-500">
                <h3 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                  Pulse Detection
                </h3>
                <p className="text-sm text-slate-700 mb-2">Group mentions into issues</p>
                <div className="bg-purple-100 p-2 rounded text-xs">
                  <strong>Output:</strong> "Hygiene Issue"
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow border-l-4 border-purple-500">
                <h3 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                  Conversation Spread
                </h3>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Count mentions</li>
                  <li>• Platform distribution</li>
                  <li>• Amplification</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 shadow border-l-4 border-purple-500">
                <h3 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                  Momentum Detection
                </h3>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Detect spikes</li>
                  <li>• Identify growth</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 shadow border-l-4 border-purple-500">
                <h3 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">4</span>
                  Risk Evaluation
                </h3>
                <p className="text-sm text-slate-700 mb-2">Combine:</p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Sentiment</li>
                  <li>• Reach</li>
                  <li>• Spread</li>
                  <li>• Momentum</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-100 border-l-4 border-purple-600 p-3 rounded">
              <p className="text-sm font-semibold text-purple-900">
                💡 Value: "Transforms raw data into structured communication signals"
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="w-8 h-8 text-slate-400" />
          </div>

          {/* Section 4: Output Modules */}
          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold text-green-900">4. OUTPUT MODULES (WHAT USER SEES)</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4 shadow border-l-4 border-red-500">
                <h3 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  🟥 Pulse
                </h3>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Overview of issues</li>
                  <li>• Hashtags</li>
                  <li>• Conversation insights</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 shadow border-l-4 border-blue-500">
                <h3 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  🔍 Social Intelligence
                </h3>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Deep analysis</li>
                  <li>• Mention-level details</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 shadow border-l-4 border-yellow-500">
                <h3 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  ⚡ Live Signals
                </h3>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Alerts</li>
                  <li>• Configurations</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 shadow border-l-4 border-purple-500">
                <h3 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  📊 Trends & Analytics
                </h3>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Sentiment trends</li>
                  <li>• Volume trends</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-100 border-l-4 border-green-600 p-3 rounded">
              <p className="text-sm font-semibold text-green-900">
                💡 Value: "Gives clear visibility across all communication activity"
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="w-8 h-8 text-slate-400" />
          </div>

          {/* Section 5: AI Layer */}
          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-8 h-8 text-red-600" />
              <h2 className="text-2xl font-bold text-red-900">5. AI LAYER (KAIKU BUDDY AI)</h2>
            </div>

            <div className="bg-red-100 border-l-4 border-red-600 p-3 rounded mb-4">
              <p className="text-sm font-semibold text-red-900">
                👉 Only inside Crises Management
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4 shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-5 h-5 text-red-600" />
                  <h3 className="font-semibold text-red-800">🧠 Situation Summary</h3>
                </div>
                <p className="text-sm text-slate-600 italic">"What is happening?"</p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <h3 className="font-semibold text-red-800">🧠 Why It Matters</h3>
                </div>
                <p className="text-sm text-slate-600 italic">"Why this is important?"</p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-red-600" />
                  <h3 className="font-semibold text-red-800">🎯 Recommended Action</h3>
                </div>
                <p className="text-sm text-slate-600 italic">"What should we do?"</p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-red-600" />
                  <h3 className="font-semibold text-red-800">⚡ Signal Explanation</h3>
                </div>
                <p className="text-sm text-slate-600 italic">"Why this alert triggered?"</p>
              </div>
            </div>

            <div className="bg-red-100 border-l-4 border-red-600 p-3 rounded">
              <p className="text-sm font-semibold text-red-900">
                💡 Value: "Reduces decision time during critical situations"
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="w-8 h-8 text-slate-400" />
          </div>

          {/* Section 6: Action Layer */}
          <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-orange-600" />
              <h2 className="text-2xl font-bold text-orange-900">6. ACTION LAYER (MOST IMPORTANT)</h2>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4 shadow text-center">
                <Target className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold text-sm">Assign Issue</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow text-center">
                <Activity className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold text-sm">Track Status</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow text-center">
                <FileText className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold text-sm">Add Notes</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow text-center">
                <MessageSquare className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold text-sm">Respond to Media</p>
              </div>
            </div>

            <div className="bg-orange-100 border-l-4 border-orange-600 p-3 rounded">
              <p className="text-sm font-semibold text-orange-900">
                💡 Value: "Moves from insight to action instantly"
              </p>
            </div>
          </div>

        </div>

        {/* Complete Flow Diagram */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-900 rounded-xl p-6 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">🔄 COMPLETE FLOW</h2>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div className="bg-blue-500 px-4 py-2 rounded-lg text-white font-semibold">Data</div>
            <ArrowRight className="w-6 h-6 text-white" />
            <div className="bg-purple-500 px-4 py-2 rounded-lg text-white font-semibold">Processing</div>
            <ArrowRight className="w-6 h-6 text-white" />
            <div className="bg-green-500 px-4 py-2 rounded-lg text-white font-semibold">Signals</div>
            <ArrowRight className="w-6 h-6 text-white" />
            <div className="bg-red-500 px-4 py-2 rounded-lg text-white font-semibold">Crises</div>
            <ArrowRight className="w-6 h-6 text-white" />
            <div className="bg-orange-500 px-4 py-2 rounded-lg text-white font-semibold">Action</div>
          </div>
        </div>

        {/* Value Proposition Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 shadow-2xl text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">💥 VALUE PROPOSITION</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6" />
                <h3 className="font-bold text-lg">🚀 Faster Decision Making</h3>
              </div>
              <p className="text-sm">No need to analyze multiple sources manually</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6" />
                <h3 className="font-bold text-lg">🎯 Clear Prioritization</h3>
              </div>
              <p className="text-sm">Know what needs attention instantly</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6" />
                <h3 className="font-bold text-lg">⚡ Early Risk Detection</h3>
              </div>
              <p className="text-sm">Identify issues before they escalate</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Brain className="w-6 h-6" />
                <h3 className="font-bold text-lg">🤖 AI-Assisted Crisis Handling</h3>
              </div>
              <p className="text-sm">Guidance during critical situations</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6 space-y-3 md:col-span-2">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-6 h-6" />
                <h3 className="font-bold text-lg">📊 Better Client Reporting</h3>
              </div>
              <p className="text-sm">Structured insights, not raw data</p>
            </div>
          </div>
        </div>

      </div>
    </div>
        )}

        {activeTab === 'intelligence' && (
          <div className="space-y-8">
            <section className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex justify-center">
                <img 
                  src={flowchart} 
                  alt="Your Brand Through the Lens of AI PulseIQ - A 5-step process flow showing Client & Data Setup, Intelligence Engine, Smart Signals & Insights, Crisis Intelligence, and Action & Client Management"
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </section>
          </div>
        )}
      </main>
         <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-600">
              Powered by
            </p>
            <div className="inline-flex">
              <svg width="193" height="45" viewBox="0 0 193 45" fill="none" className="w-32 h-12 hidden sm:block">
                <g clip-path="url(#clip0_1919_2)">
                  <path d="M32.488 24.0676L24.0886 32.467C23.8057 32.7499 23.3269 32.7499 23.0441 32.467C22.7612 32.1841 22.7612 31.7054 23.0441 31.4225L31.4435 23.0231C31.7264 22.7402 32.2051 22.7402 32.488 23.0231C32.7709 23.306 32.7709 23.7629 32.488 24.0676ZM27.2438 17.7571C26.9609 17.4743 26.4822 17.4743 26.1993 17.7571L17.7999 26.1566C17.517 26.4394 17.517 26.9182 17.7999 27.201C18.0827 27.4839 18.5615 27.4839 18.8444 27.201L27.2438 18.8016C27.5267 18.5187 27.5267 18.0618 27.2438 17.7571ZM21.9996 12.5129C21.7167 12.2301 21.238 12.2301 20.9551 12.5129L12.5557 20.9124C12.2728 21.1952 12.2728 21.674 12.5557 21.9568C12.8385 22.2397 13.3173 22.2397 13.6002 21.9568L21.9996 13.5574C22.2825 13.2745 22.2825 12.8176 21.9996 12.5129ZM19.9106 19.8679C19.6277 19.585 19.149 19.585 18.8661 19.8679L13.6219 25.1121C13.339 25.395 13.339 25.8737 13.6219 26.1566C13.9048 26.4394 14.3835 26.4394 14.6664 26.1566L19.9106 20.9124C20.1935 20.6295 20.1935 20.1508 19.9106 19.8679ZM31.4435 18.8234C31.1606 18.5405 30.6819 18.5405 30.399 18.8234L25.1548 24.0676C24.8719 24.3505 24.8719 24.8292 25.1548 25.1121C25.4377 25.395 25.9164 25.395 26.1993 25.1121L31.4435 19.8679C31.7264 19.5632 31.7264 19.1063 31.4435 18.8234Z" fill="#00A5CB"></path>
                  <path d="M42.1711 19.6281L28.7886 33.0106L19.6058 42.1934C19.3229 42.4762 18.8442 42.4762 18.5613 42.1934C18.2785 41.9105 18.2785 41.4318 18.5613 41.1489L26.395 33.3152L27.7441 31.9661L41.1266 18.5618C41.4095 18.2789 41.8882 18.2789 42.1711 18.5618C42.454 18.8665 42.454 19.3234 42.1711 19.6281ZM10.4448 13.6005C10.1619 13.3176 9.6832 13.3176 9.40032 13.6005L0.217533 22.7615C-0.0653494 23.0444 -0.0653494 23.5231 0.217533 23.806C0.500415 24.0889 0.979138 24.0889 1.26202 23.806L10.4448 14.645C10.7277 14.3404 10.7277 13.8834 10.4448 13.6005ZM18.3002 5.72334C18.0173 5.44046 17.5386 5.44046 17.2557 5.72334L12.0115 10.9675C11.7287 11.2504 11.7287 11.7291 12.0115 12.012C12.2944 12.2949 12.7731 12.2949 13.056 12.012L18.3002 6.76783C18.6049 6.48495 18.6049 6.00622 18.3002 5.72334ZM23.8055 0.218021C23.5227 -0.0648611 23.0439 -0.0648611 22.7611 0.218021L19.8887 3.11212C19.6058 3.395 19.6058 3.87373 19.8887 4.15661C20.1716 4.43949 20.6503 4.43949 20.9332 4.15661L23.8273 1.26251C24.1102 0.979626 24.1102 0.500903 23.8055 0.218021ZM26.4385 2.82924C26.1556 2.54636 25.6769 2.54636 25.394 2.82924L18.866 9.35729L16.146 12.0773L11.5981 16.6252L2.82875 25.3945C2.54587 25.6774 2.54587 26.1561 2.82875 26.439C3.11163 26.7219 3.59036 26.7219 3.87324 26.439L12.6426 17.6697L17.1905 13.1218L19.8234 10.4888L19.8452 10.4671L19.9105 10.4018L26.4385 3.87373C26.7214 3.59084 26.7214 3.13388 26.4385 2.82924ZM11.6851 22.8268C11.4023 22.5439 10.9235 22.5439 10.6406 22.8268L5.46173 28.0057C5.17885 28.2886 5.17885 28.7673 5.46173 29.0502C5.74461 29.3331 6.22334 29.3331 6.50622 29.0502L11.6851 23.8713C11.968 23.5884 11.968 23.1315 11.6851 22.8268ZM29.0497 5.46222C28.7669 5.17934 28.2881 5.17934 28.0053 5.46222L23.4574 10.0101C23.1745 10.293 23.1745 10.7717 23.4574 11.0546C23.7403 11.3375 24.219 11.3375 24.5019 11.0546L29.0497 6.50671C29.3544 6.22382 29.3544 5.7451 29.0497 5.46222ZM31.6827 8.07344C31.3998 7.79055 30.9211 7.79055 30.6382 8.07344L21.4554 17.2562C21.1726 17.5391 21.1726 18.0178 21.4554 18.3007C21.7383 18.5836 22.217 18.5836 22.4999 18.3007L31.6827 9.13968C31.9656 8.83504 31.9656 8.37808 31.6827 8.07344ZM12.4903 27.2659C12.2074 26.983 11.7287 26.983 11.4458 27.2659L8.07295 30.6387C7.79007 30.9216 7.79007 31.4003 8.07295 31.6832C8.35583 31.9661 8.83455 31.9661 9.11744 31.6832L12.4903 28.3104C12.7949 28.0275 12.7949 27.5488 12.4903 27.2659ZM16.2112 28.7891C15.9284 28.5062 15.4496 28.5062 15.1668 28.7891L10.7059 33.2499C10.423 33.5328 10.423 34.0115 10.7059 34.2944C10.9888 34.5773 11.4675 34.5773 11.7504 34.2944L16.2112 29.8336C16.4941 29.5507 16.4941 29.0937 16.2112 28.7891ZM34.2939 10.7064C34.0111 10.4235 33.5323 10.4235 33.2495 10.7064L28.7886 15.1672C28.5057 15.4501 28.5057 15.9289 28.7886 16.2117C29.0715 16.4946 29.5502 16.4946 29.8331 16.2117L34.2939 11.7509C34.5986 11.468 34.5986 10.9893 34.2939 10.7064ZM23.5444 26.7001C23.2615 26.4172 22.7828 26.4172 22.4999 26.7001L13.3171 35.8829C13.0343 36.1658 13.0343 36.6445 13.3171 36.9274C13.6 37.2103 14.0788 37.2103 14.3616 36.9274L23.5444 27.7446C23.8491 27.4617 23.8491 26.983 23.5444 26.7001ZM36.9269 13.3176C36.644 13.0348 36.1653 13.0348 35.8824 13.3176L32.8578 16.3423C32.5749 16.6252 32.5749 17.1039 32.8578 17.3868C33.1406 17.6697 33.6194 17.6697 33.9023 17.3868L36.9269 14.3621C37.2098 14.0792 37.2098 13.6223 36.9269 13.3176ZM21.4554 34.0333C21.1726 33.7504 20.6938 33.7504 20.411 34.0333L15.9501 38.4941C15.6672 38.777 15.6672 39.2557 15.9501 39.5386C16.233 39.8215 16.7117 39.8215 16.9946 39.5386L21.4554 35.0778C21.7383 34.7949 21.7383 34.3379 21.4554 34.0333ZM39.5381 15.9506C39.2553 15.6677 38.7765 15.6677 38.4936 15.9506L34.1416 20.3026C33.8587 20.5855 33.8587 21.0642 34.1416 21.3471C34.4245 21.63 34.9032 21.63 35.1861 21.3471L39.5381 16.9951C39.8428 16.7122 39.8428 16.2335 39.5381 15.9506ZM44.7823 21.1948C44.4995 20.9119 44.0207 20.9119 43.7378 21.1948L34.5551 30.3776C34.2722 30.6605 34.2722 31.1392 34.5551 31.4221C34.8379 31.705 35.3167 31.705 35.5995 31.4221L44.7823 22.2393C45.087 21.9564 45.087 21.4777 44.7823 21.1948ZM27.483 38.4941C27.2001 38.2113 26.7214 38.2113 26.4385 38.4941L21.1943 43.7383C20.9114 44.0212 20.9114 44.4999 21.1943 44.7828C21.4772 45.0657 21.9559 45.0657 22.2388 44.7828L27.483 39.5386C27.7659 39.2557 27.7659 38.7988 27.483 38.4941ZM33.0536 32.9235C32.7707 32.6407 32.292 32.6407 32.0091 32.9235L29.115 35.8176C28.8321 36.1005 28.8321 36.5792 29.115 36.8621C29.3979 37.145 29.8766 37.145 30.1595 36.8621L33.0536 33.968C33.3582 33.6851 33.3582 33.2282 33.0536 32.9235Z" className="fill-black dark:fill-white"></path>
                </g>
                <path d="M63.71 14.6234L62.18 15.7934C61.43 14.6834 60.32 14.1134 58.88 14.1134C57.89 14.1134 57.05 14.3834 56.33 14.9234C55.61 15.4634 55.25 16.2134 55.25 17.2034C55.25 18.0434 55.55 18.7035 56.15 19.2135C56.75 19.7235 57.47 20.1135 58.34 20.3835C59.18 20.6535 60.05 20.9535 60.92 21.2535C61.79 21.5535 62.51 22.0935 63.11 22.7835C63.71 23.5035 64.01 24.4035 64.01 25.5435C64.01 27.0135 63.44 28.2135 62.27 29.1435C61.13 30.0435 59.81 30.4935 58.37 30.4935C56.03 30.4935 54.23 29.6535 53 27.9435L54.56 26.8035C55.37 28.1835 56.66 28.8735 58.46 28.8735C59.39 28.8735 60.23 28.6035 61.01 28.0335C61.76 27.4635 62.15 26.7135 62.15 25.7535C62.15 25.0035 61.94 24.3735 61.49 23.8935C61.07 23.4135 60.53 23.0535 59.87 22.8435C59.24 22.6335 58.52 22.3935 57.77 22.0935C57.02 21.8235 56.3 21.5235 55.67 21.2535C55.04 20.9535 54.5 20.5034 54.05 19.8434C53.63 19.1834 53.39 18.3735 53.39 17.3834C53.39 15.8234 53.93 14.6234 55.01 13.7834C56.09 12.9434 57.41 12.5234 58.91 12.5234C60.89 12.5534 62.48 13.2434 63.71 14.6234Z" fill="#00A5CB"></path>
                <path d="M80.84 26.3528L82.25 27.3728C81.65 28.3028 80.78 29.0528 79.67 29.6228C78.53 30.2228 77.3 30.4928 75.92 30.4928C73.37 30.4928 71.24 29.6528 69.56 27.9428C67.88 26.2328 67.01 24.1028 67.01 21.5227C67.01 18.9427 67.85 16.7827 69.56 15.1027C71.24 13.3927 73.37 12.5527 75.92 12.5527C77.06 12.5527 78.14 12.7927 79.19 13.2427C80.24 13.6927 81.14 14.3827 81.83 15.2827L80.3 16.4227C79.94 15.8527 79.34 15.3127 78.5 14.8627C77.66 14.4127 76.79 14.1727 75.92 14.1727C73.79 14.1727 72.08 14.8927 70.82 16.3327C69.53 17.7727 68.9 19.5127 68.9 21.5527C68.9 23.5928 69.53 25.3328 70.82 26.7728C72.11 28.2128 73.79 28.9328 75.92 28.9328C78.08 28.9028 79.73 28.0628 80.84 26.3528Z" fill="#00A5CB"></path>
                <path d="M87.44 25.5727L85.55 30.0727H83.51L90.95 12.9727H92.63L100.07 30.0727H98.03L96.14 25.5727H87.44ZM91.82 15.0127L88.1 23.9827H95.51L91.82 15.0127Z" fill="#00A5CB"></path>
                <path d="M104.84 12.9727V28.4827H112.82V30.0727H103.1V12.9727H104.84Z" fill="#00A5CB"></path>
                <path d="M117.59 21.9734V28.4534H126.74V30.0434H115.85V12.9434H126.44V14.5334H117.59V20.3534H125.87V21.9434H117.59V21.9734Z" fill="#00A5CB"></path>
                <path d="M133.58 30.0727V16.3027H128.69V12.9727H142.22V16.3027H137.33V30.0727H133.58Z" className="fill-black dark:fill-white"></path>
                <path d="M144.95 30.0727V12.9727H156.56V16.4527H148.7V19.6327H156.11V23.1127H148.7V26.5927H156.98V30.0727H144.95Z" className="fill-black dark:fill-white"></path>
                <path d="M174.74 15.074L171.83 17.444C171.05 16.514 169.97 16.034 168.59 16.034C167.15 16.034 165.98 16.544 165.05 17.594C164.12 18.644 163.64 19.934 163.64 21.554C163.64 23.144 164.09 24.434 165.02 25.484C165.95 26.534 167.09 27.044 168.47 27.044C170 27.044 171.17 26.444 171.98 25.214L175.13 27.554C174.44 28.544 173.54 29.264 172.43 29.774C171.32 30.284 170.15 30.524 168.95 30.524C166.25 30.524 164.03 29.714 162.32 28.064C160.61 26.414 159.74 24.254 159.74 21.554C159.74 18.854 160.61 16.664 162.32 15.044C164.03 13.394 166.25 12.584 168.95 12.584C170.03 12.584 171.08 12.794 172.13 13.184C173.21 13.544 174.08 14.204 174.74 15.074Z" className="fill-black dark:fill-white"></path>
                <path d="M177.89 30.0727V12.9727H181.67V19.3327H188.99V12.9727H192.77V30.0727H188.99V22.6927H181.67V30.0727H177.89Z" className="fill-black dark:fill-white"></path>
                <defs>
                  <clipPath id="clip0_1919_2">
                    <rect width="45" height="45" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <svg width="45" height="45" viewBox="0 0 45 45" fill="none" className="h-12 sm:hidden">
                <g clip-path="url(#clip0_1919_2)">
                  <path d="M32.488 24.0676L24.0886 32.467C23.8057 32.7499 23.3269 32.7499 23.0441 32.467C22.7612 32.1841 22.7612 31.7054 23.0441 31.4225L31.4435 23.0231C31.7264 22.7402 32.2051 22.7402 32.488 23.0231C32.7709 23.306 32.7709 23.7629 32.488 24.0676ZM27.2438 17.7571C26.9609 17.4743 26.4822 17.4743 26.1993 17.7571L17.7999 26.1566C17.517 26.4394 17.517 26.9182 17.7999 27.201C18.0827 27.4839 18.5615 27.4839 18.8444 27.201L27.2438 18.8016C27.5267 18.5187 27.5267 18.0618 27.2438 17.7571ZM21.9996 12.5129C21.7167 12.2301 21.238 12.2301 20.9551 12.5129L12.5557 20.9124C12.2728 21.1952 12.2728 21.674 12.5557 21.9568C12.8385 22.2397 13.3173 22.2397 13.6002 21.9568L21.9996 13.5574C22.2825 13.2745 22.2825 12.8176 21.9996 12.5129ZM19.9106 19.8679C19.6277 19.585 19.149 19.585 18.8661 19.8679L13.6219 25.1121C13.339 25.395 13.339 25.8737 13.6219 26.1566C13.9048 26.4394 14.3835 26.4394 14.6664 26.1566L19.9106 20.9124C20.1935 20.6295 20.1935 20.1508 19.9106 19.8679ZM31.4435 18.8234C31.1606 18.5405 30.6819 18.5405 30.399 18.8234L25.1548 24.0676C24.8719 24.3505 24.8719 24.8292 25.1548 25.1121C25.4377 25.395 25.9164 25.395 26.1993 25.1121L31.4435 19.8679C31.7264 19.5632 31.7264 19.1063 31.4435 18.8234Z" fill="#00A5CB"></path>
                  <path d="M42.1711 19.6281L28.7886 33.0106L19.6058 42.1934C19.3229 42.4762 18.8442 42.4762 18.5613 42.1934C18.2785 41.9105 18.2785 41.4318 18.5613 41.1489L26.395 33.3152L27.7441 31.9661L41.1266 18.5618C41.4095 18.2789 41.8882 18.2789 42.1711 18.5618C42.454 18.8665 42.454 19.3234 42.1711 19.6281ZM10.4448 13.6005C10.1619 13.3176 9.6832 13.3176 9.40032 13.6005L0.217533 22.7615C-0.0653494 23.0444 -0.0653494 23.5231 0.217533 23.806C0.500415 24.0889 0.979138 24.0889 1.26202 23.806L10.4448 14.645C10.7277 14.3404 10.7277 13.8834 10.4448 13.6005ZM18.3002 5.72334C18.0173 5.44046 17.5386 5.44046 17.2557 5.72334L12.0115 10.9675C11.7287 11.2504 11.7287 11.7291 12.0115 12.012C12.2944 12.2949 12.7731 12.2949 13.056 12.012L18.3002 6.76783C18.6049 6.48495 18.6049 6.00622 18.3002 5.72334ZM23.8055 0.218021C23.5227 -0.0648611 23.0439 -0.0648611 22.7611 0.218021L19.8887 3.11212C19.6058 3.395 19.6058 3.87373 19.8887 4.15661C20.1716 4.43949 20.6503 4.43949 20.9332 4.15661L23.8273 1.26251C24.1102 0.979626 24.1102 0.500903 23.8055 0.218021ZM26.4385 2.82924C26.1556 2.54636 25.6769 2.54636 25.394 2.82924L18.866 9.35729L16.146 12.0773L11.5981 16.6252L2.82875 25.3945C2.54587 25.6774 2.54587 26.1561 2.82875 26.439C3.11163 26.7219 3.59036 26.7219 3.87324 26.439L12.6426 17.6697L17.1905 13.1218L19.8234 10.4888L19.8452 10.4671L19.9105 10.4018L26.4385 3.87373C26.7214 3.59084 26.7214 3.13388 26.4385 2.82924ZM11.6851 22.8268C11.4023 22.5439 10.9235 22.5439 10.6406 22.8268L5.46173 28.0057C5.17885 28.2886 5.17885 28.7673 5.46173 29.0502C5.74461 29.3331 6.22334 29.3331 6.50622 29.0502L11.6851 23.8713C11.968 23.5884 11.968 23.1315 11.6851 22.8268ZM29.0497 5.46222C28.7669 5.17934 28.2881 5.17934 28.0053 5.46222L23.4574 10.0101C23.1745 10.293 23.1745 10.7717 23.4574 11.0546C23.7403 11.3375 24.219 11.3375 24.5019 11.0546L29.0497 6.50671C29.3544 6.22382 29.3544 5.7451 29.0497 5.46222ZM31.6827 8.07344C31.3998 7.79055 30.9211 7.79055 30.6382 8.07344L21.4554 17.2562C21.1726 17.5391 21.1726 18.0178 21.4554 18.3007C21.7383 18.5836 22.217 18.5836 22.4999 18.3007L31.6827 9.13968C31.9656 8.83504 31.9656 8.37808 31.6827 8.07344ZM12.4903 27.2659C12.2074 26.983 11.7287 26.983 11.4458 27.2659L8.07295 30.6387C7.79007 30.9216 7.79007 31.4003 8.07295 31.6832C8.35583 31.9661 8.83455 31.9661 9.11744 31.6832L12.4903 28.3104C12.7949 28.0275 12.7949 27.5488 12.4903 27.2659ZM16.2112 28.7891C15.9284 28.5062 15.4496 28.5062 15.1668 28.7891L10.7059 33.2499C10.423 33.5328 10.423 34.0115 10.7059 34.2944C10.9888 34.5773 11.4675 34.5773 11.7504 34.2944L16.2112 29.8336C16.4941 29.5507 16.4941 29.0937 16.2112 28.7891ZM34.2939 10.7064C34.0111 10.4235 33.5323 10.4235 33.2495 10.7064L28.7886 15.1672C28.5057 15.4501 28.5057 15.9289 28.7886 16.2117C29.0715 16.4946 29.5502 16.4946 29.8331 16.2117L34.2939 11.7509C34.5986 11.468 34.5986 10.9893 34.2939 10.7064ZM23.5444 26.7001C23.2615 26.4172 22.7828 26.4172 22.4999 26.7001L13.3171 35.8829C13.0343 36.1658 13.0343 36.6445 13.3171 36.9274C13.6 37.2103 14.0788 37.2103 14.3616 36.9274L23.5444 27.7446C23.8491 27.4617 23.8491 26.983 23.5444 26.7001ZM36.9269 13.3176C36.644 13.0348 36.1653 13.0348 35.8824 13.3176L32.8578 16.3423C32.5749 16.6252 32.5749 17.1039 32.8578 17.3868C33.1406 17.6697 33.6194 17.6697 33.9023 17.3868L36.9269 14.3621C37.2098 14.0792 37.2098 13.6223 36.9269 13.3176ZM21.4554 34.0333C21.1726 33.7504 20.6938 33.7504 20.411 34.0333L15.9501 38.4941C15.6672 38.777 15.6672 39.2557 15.9501 39.5386C16.233 39.8215 16.7117 39.8215 16.9946 39.5386L21.4554 35.0778C21.7383 34.7949 21.7383 34.3379 21.4554 34.0333ZM39.5381 15.9506C39.2553 15.6677 38.7765 15.6677 38.4936 15.9506L34.1416 20.3026C33.8587 20.5855 33.8587 21.0642 34.1416 21.3471C34.4245 21.63 34.9032 21.63 35.1861 21.3471L39.5381 16.9951C39.8428 16.7122 39.8428 16.2335 39.5381 15.9506ZM44.7823 21.1948C44.4995 20.9119 44.0207 20.9119 43.7378 21.1948L34.5551 30.3776C34.2722 30.6605 34.2722 31.1392 34.5551 31.4221C34.8379 31.705 35.3167 31.705 35.5995 31.4221L44.7823 22.2393C45.087 21.9564 45.087 21.4777 44.7823 21.1948ZM27.483 38.4941C27.2001 38.2113 26.7214 38.2113 26.4385 38.4941L21.1943 43.7383C20.9114 44.0212 20.9114 44.4999 21.1943 44.7828C21.4772 45.0657 21.9559 45.0657 22.2388 44.7828L27.483 39.5386C27.7659 39.2557 27.7659 38.7988 27.483 38.4941ZM33.0536 32.9235C32.7707 32.6407 32.292 32.6407 32.0091 32.9235L29.115 35.8176C28.8321 36.1005 28.8321 36.5792 29.115 36.8621C29.3979 37.145 29.8766 37.145 30.1595 36.8621L33.0536 33.968C33.3582 33.6851 33.3582 33.2282 33.0536 32.9235Z" className="fill-black dark:fill-white"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
