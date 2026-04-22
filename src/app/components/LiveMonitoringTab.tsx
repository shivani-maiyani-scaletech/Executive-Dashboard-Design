import { AlertCircle, Clock, Filter } from 'lucide-react';

export function LiveMonitoringTab() {
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
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Real-Time Alert Feed</h3>

          <div className="space-y-4">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`border-l-4 ${severityColors[alert.severity as keyof typeof severityColors]} rounded-lg p-4`}
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

            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
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
