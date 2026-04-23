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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="flex cursor-pointer items-center gap-2 text-blue-200 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to PulseIQ
              </button>
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
    </div>
  );
}
