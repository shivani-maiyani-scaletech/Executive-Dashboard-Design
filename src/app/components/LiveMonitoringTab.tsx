import { AlertCircle, Clock, Filter, Plus } from 'lucide-react';
import { useState, useEffect } from 'react';

export function LiveMonitoringTab() {
  const [showForm, setShowForm] = useState(false);
  const [visibleAlerts, setVisibleAlerts] = useState<number[]>([2,3]); // Start with second alert (id: 2)

  useEffect(() => {
    // After 5 seconds, show first alert (id: 1) with animation
    const timer = setTimeout(() => {
      setVisibleAlerts(prev => [...prev, 1]);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const alerts = [
    {
      id: 1,
      severity: 'critical',
      title: 'Spike in negative media coverage detected',
      source: 'News + Social',
      time: '2 hours ago',
      aiNote: 'Rapid increase in mentions related to hygiene issue',
      reach: '85K'
    },
    {
      id: 2,
      severity: 'attention',
      title: 'Customer complaint detected',
      source: 'Blog',
      time: '5 hours ago',
      aiNote: 'Low reach mention, no escalation required',
      reach: '5K'
    },
    {
      id: 3,
      severity: 'positive',
      title: 'Positive review published',
      source: 'News',
      time: '8 hours ago',
      aiNote: 'Positive sentiment about new menu item',
      reach: '12K'
    }
  ];

  const severityColors = {
    critical: 'border-red-500 bg-red-50',
    attention: 'border-orange-500 bg-orange-50',
    positive: 'border-green-500 bg-green-50'
  };

  const severityIcons = {
    critical: '🔴',
    attention: '🟠',
    positive: '🟢'
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Real-Time Alert Feed</h3>
          <button
          onClick={() => setShowForm(!showForm)}
          className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-[var(--kaiku-blue)] text-white rounded-lg hover:bg-[var(--kaiku-blue-dark)] transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add New Signal
        </button>
          </div>
              {showForm && (
          <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
            <h3 className="mb-4">Configure New Signal</h3>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm text-gray-700">Signal Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--kaiku-blue)] bg-white"
                  placeholder="e.g., Service Quality Alert"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-700">Keywords (comma-separated)</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--kaiku-blue)] bg-white"
                  placeholder="e.g., service, wait time, slow"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm text-gray-700">Sentiment Threshold</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--kaiku-blue)] bg-white">
                    <option>Any</option>
                    <option>Negative Only</option>
                    <option>Positive Only</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-700">Reach Threshold</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--kaiku-blue)] bg-white">
                    <option>Any</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="spike" className="rounded" />
                <label htmlFor="spike" className="text-sm text-gray-700">
                  Enable spike detection
                </label>
              </div>
              <div className="flex gap-2">
                <button className="px-4 cursor-pointer py-2 bg-[var(--kaiku-blue)] text-white rounded-lg hover:bg-[var(--kaiku-blue-dark)] transition-colors">
                  Create Signal
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="px-4 cursor-pointer py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
          <div className="space-y-4">
            {alerts.filter(alert => visibleAlerts.includes(alert.id)).map((alert, index) => (
              <div
                key={alert.id}
                className={`border-l-4 ${severityColors[alert.severity as keyof typeof severityColors]} rounded-lg p-4 `}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">{severityIcons[alert.severity as keyof typeof severityIcons]}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <AlertCircle className="w-4 h-4 text-gray-600" />
                      <span className="font-semibold text-gray-900">{alert.title}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <span>Source: {alert.source}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {alert.time}
                      </span>
                      <span>Reach: {alert.reach}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded p-3 ml-9">
                  <div className="flex items-start gap-2">
                    <span>🤖</span>
                    <div>
                      <p className="font-semibold text-blue-900 text-sm">AI Note</p>
                      <p className="text-sm text-gray-700">{alert.aiNote}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200 p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">⚡</span>
            <p className="font-semibold text-gray-900">Live Monitoring Active</p>
          </div>
          <p className="text-sm text-gray-700 ml-9">
            Currently monitoring 247 sources across news, social media, and blogs.
            Next update in 2 minutes.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-700" />
            <h3 className="font-semibold text-gray-900">Filters</h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sentiment</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm text-gray-700">Negative</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm text-gray-700">Neutral</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm text-gray-700">Positive</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Source Type</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm text-gray-700">News</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm text-gray-700">Social Media</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm text-gray-700">Blogs</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-gray-700">Forums</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time Range</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
                <option>Last 24 hours</option>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Custom range</option>
              </select>
            </div>

            <button className="w-full  bg-[var(--kaiku-blue)] text-white py-2 px-4 rounded transition-colors">
              Apply Filters
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-3">Alert Statistics</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Critical Alerts</span>
              <span className="text-lg font-semibold text-red-600">1</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Attention Needed</span>
              <span className="text-lg font-semibold text-orange-600">1</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Positive Mentions</span>
              <span className="text-lg font-semibold text-green-600">1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
