import { useState } from "react";
import { Clock, User, CheckCircle, Sparkles } from "lucide-react";

const crises = [
  {
    id: 1,
    pulse: "Hygiene Issue – Helsinki Outlet",
    severity: "High",
    owner: "Sara Johnson",
    status: "Active",
    created: "2 hours ago",
    updated: "15 min ago",
  },
  {
    id: 2,
    pulse: "Service Quality Complaint – Espoo",
    severity: "Medium",
    owner: "Unassigned",
    status: "Monitoring",
    created: "4 hours ago",
    updated: "1 hour ago",
  },
  {
    id: 3,
    pulse: "Product Quality Issue – Tampere",
    severity: "Low",
    owner: "Mike Chen",
    status: "Resolved",
    created: "1 day ago",
    updated: "3 hours ago",
  },
];

export function CrisesManagementTab() {
  const [selectedCrisis, setSelectedCrisis] = useState(crises[0]);

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 space-y-6">
        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs text-gray-600">Pulse</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-600">Severity</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-600">Owner</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-600">Status</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-600">Updated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {crises.map((crisis) => (
                  <tr
                    key={crisis.id}
                    onClick={() => setSelectedCrisis(crisis)}
                    className={`cursor-pointer transition-colors ${
                      selectedCrisis.id === crisis.id ? "bg-blue-50" : "hover:bg-gray-50"
                    }`}
                  >
                    <td className="px-6 py-4 text-sm">{crisis.pulse}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded ${
                          crisis.severity === "High"
                            ? "bg-red-100 text-red-700"
                            : crisis.severity === "Medium"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {crisis.severity}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">{crisis.owner}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded ${
                          crisis.status === "Active"
                            ? "bg-red-100 text-red-700"
                            : crisis.status === "Monitoring"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {crisis.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{crisis.updated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex items-center justify-end">

          <button className="flex cursor-pointer items-center gap-2 text-sm font-medium text-white rounded-lg bg-[var(--kaiku-blue)] p-3.5">
            <Sparkles className="w-4 h-4" />
            Kaiku Buddy
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
        <h3 className="mb-4 pb-3 border-b border-gray-200">Crisis Details</h3>

        <div className="space-y-6">
          <div>
            <div className="text-xs text-gray-600 mb-1">Pulse</div>
            <div className="text-sm font-medium">{selectedCrisis.pulse}</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-gray-600 mb-1">Severity</div>
              <span
                className={`inline-block px-2 py-1 text-xs rounded ${
                  selectedCrisis.severity === "High"
                    ? "bg-red-100 text-red-700"
                    : selectedCrisis.severity === "Medium"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {selectedCrisis.severity}
              </span>
            </div>
            <div>
              <div className="text-xs text-gray-600 mb-1">Status</div>
              <span
                className={`inline-block px-2 py-1 text-xs rounded ${
                  selectedCrisis.status === "Active"
                    ? "bg-red-100 text-red-700"
                    : selectedCrisis.status === "Monitoring"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {selectedCrisis.status}
              </span>
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-600 mb-2">Timeline</div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-gray-600">Created</div>
                  <div>{selectedCrisis.created}</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-gray-600">Last Updated</div>
                  <div>{selectedCrisis.updated}</div>
                </div>
              </div>
            </div>
          </div>

         

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[var(--kaiku-blue)] flex-shrink-0" />
              <div className="text-sm font-medium text-[var(--kaiku-blue)]">AI Summary</div>
            </div>
            <p className="text-sm text-gray-700">
              High-severity crisis requiring immediate attention. Conversation velocity exceeds normal patterns
              by 3x. Recommended response time: within 2 hours.
            </p>
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[var(--kaiku-blue)] text-white rounded-lg hover:bg-[var(--kaiku-blue-dark)] transition-colors">
              <User className="w-4 h-4" />
              Assign Owner
            </button>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <CheckCircle className="w-4 h-4" />
              Update Status
            </button>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Add Note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
