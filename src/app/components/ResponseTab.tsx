import { User, Clock, AlertCircle } from 'lucide-react';

export function ResponseTab() {
  const issues = [
    {
      id: 1,
      title: 'Hygiene Issue – Helsinki Outlet',
      coverage: 'High',
      coverageColor: 'text-red-600',
      sentiment: 'Negative',
      sentimentColor: 'text-red-600',
      owner: 'Anna',
      status: 'In Progress',
      statusColor: 'bg-blue-100 text-blue-700',
      priority: 'critical',
      mentions: 5,
      reach: '85K'
    },
    {
      id: 2,
      title: 'Slow Service Complaint',
      coverage: 'Low',
      coverageColor: 'text-gray-600',
      sentiment: 'Slightly Negative',
      sentimentColor: 'text-orange-600',
      owner: '-',
      status: 'Monitoring',
      statusColor: 'bg-gray-100 text-gray-700',
      priority: 'attention',
      mentions: 2,
      reach: '5K'
    },
    {
      id: 3,
      title: 'New Menu Item Launch',
      coverage: 'Medium',
      coverageColor: 'text-blue-600',
      sentiment: 'Positive',
      sentimentColor: 'text-green-600',
      owner: 'Mikko',
      status: 'Active',
      statusColor: 'bg-green-100 text-green-700',
      priority: 'positive',
      mentions: 15,
      reach: '42K'
    }
  ];

  const priorityBadges = {
    critical: 'bg-red-500',
    attention: 'bg-orange-500',
    positive: 'bg-green-500'
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Communication Response Management</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            + Create New Issue
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Priority</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Issue</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Coverage</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Sentiment</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Mentions</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Reach</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Owner</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((issue) => (
                <tr key={issue.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <span className={`w-3 h-3 rounded-full ${priorityBadges[issue.priority as keyof typeof priorityBadges]} inline-block`}></span>
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-medium text-gray-900">{issue.title}</p>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`font-medium ${issue.coverageColor}`}>{issue.coverage}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`font-medium ${issue.sentimentColor}`}>{issue.sentiment}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-gray-900">{issue.mentions}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-gray-900">{issue.reach}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      {issue.owner !== '-' && <User className="w-4 h-4 text-gray-400" />}
                      <span className="text-gray-900">{issue.owner}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${issue.statusColor}`}>
                      {issue.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Quick Actions</h4>
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 py-3 px-4 rounded transition-colors">
              <User className="w-4 h-4" />
              <span>Assign Owner</span>
            </button>
            <button className="w-full flex items-center gap-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 rounded transition-colors">
              <Clock className="w-4 h-4" />
              <span>Update Status</span>
            </button>
            <button className="w-full flex items-center gap-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 rounded transition-colors">
              <AlertCircle className="w-4 h-4" />
              <span>Add Notes</span>
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200 p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Response Statistics</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">Total Active Issues</span>
              <span className="text-2xl font-semibold text-gray-900">3</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">Critical Priority</span>
              <span className="text-2xl font-semibold text-red-600">1</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">In Progress</span>
              <span className="text-2xl font-semibold text-blue-600">1</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">Avg Response Time</span>
              <span className="text-2xl font-semibold text-gray-900">2.3h</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <div className="flex items-start gap-2">
          <span className="text-2xl">🧠</span>
          <div>
            <p className="font-semibold text-purple-900 mb-2">AI Recommendations</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <span>Hygiene issue requires immediate escalation - assign senior crisis manager</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <span>Consider proactive media outreach for positive menu launch story to balance sentiment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <span>Service complaint shows pattern - recommend operational review</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
