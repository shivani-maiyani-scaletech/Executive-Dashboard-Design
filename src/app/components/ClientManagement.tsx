import { useNavigate } from "react-router";
import { Activity, ArrowLeft, Plus, CheckCircle, AlertCircle } from "lucide-react";

const clients = [
  {
    id: 1,
    name: "McDonald's Finland",
    region: "Finland",
    status: "Active",
    lastSync: "2 min ago",
    connected: true,
  },
  {
    id: 2,
    name: "KFC Finland",
    region: "Finland",
    status: "Active",
    lastSync: "5 min ago",
    connected: true,
  },
];

export function ClientManagement() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[var(--background)] p-8">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate("/dashboard")}
          className="flex cursor-pointer items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </button>

        <div className="flex items-center gap-3 mb-2">
          <Activity className="w-8 h-8 text-[var(--kaiku-blue)]" />
          <h1 className="text-3xl">Client Management</h1>
        </div>
        <p className="text-gray-600 mb-8">Manage client configurations and data source connections</p>

        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs text-gray-600">Client</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-600">Region</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-600">Status</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-600">Last Sync</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-600">Data Source</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {clients.map((client) => (
                  <tr key={client.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium">{client.name}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{client.region}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                        <CheckCircle className="w-3 h-3" />
                        {client.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{client.lastSync}</td>
                    <td className="px-6 py-4">
                      {client.connected ? (
                        <span className="inline-flex items-center gap-1 text-sm text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-sm text-red-600">
                          <AlertCircle className="w-4 h-4" />
                          Disconnected
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="text-sm text-[var(--kaiku-blue)] hover:underline">Edit</button>
                        <span className="text-gray-300">|</span>
                        <button className="text-sm text-[var(--kaiku-blue)] hover:underline">
                          Reconnect
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-gray-200 p-4">
            <button
              onClick={() => navigate("/onboard")}
              className="flex cursor-pointer items-center gap-2 px-4 py-2 text-sm text-[var(--kaiku-blue)] hover:bg-blue-50 rounded-lg transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add New Client
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
