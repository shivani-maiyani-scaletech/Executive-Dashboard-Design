import { useState } from "react";
import { useNavigate } from "react-router";
import { Search, Plus, Activity, ArrowRight } from "lucide-react";

const clients = [
  { id: 1, name: "McDonald's Finland", status: "Active", pulses: 2 },
  { id: 2, name: "KFC Finland", status: "Active", pulses: 0 },
];

export function ClientSelection() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredClients = clients.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[var(--background)] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Activity className="w-8 h-8 text-[var(--kaiku-blue)]" />
          <h1 className="text-3xl">Select Client</h1>
        </div>
        <p className="text-gray-600 mb-8">
          Choose a client to monitor real-time communication signals and risks
        </p>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search clients..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--kaiku-blue)] bg-white"
              />
            </div>
          </div>

          <div className="space-y-3">
            {filteredClients.map((client) => (
              <div
                key={client.id}
                onClick={() => navigate("/dashboard")}
                className="p-4 border border-gray-200 rounded-lg hover:border-[var(--kaiku-blue)] hover:bg-blue-50 cursor-pointer transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="mb-1">{client.name}</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-green-600">● {client.status}</span>
                      {client.pulses > 0 && (
                        <span className="text-orange-600">
                          {client.pulses} active pulse{client.pulses !== 1 ? "s" : ""}
                        </span>
                      )}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[var(--kaiku-blue)] transition-colors" />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate("/onboard")}
            className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-[var(--kaiku-blue)] hover:bg-blue-50 transition-colors text-gray-700"
          >
            <Plus className="w-5 h-5" />
            Add New Client
          </button>
        </div>
      </div>
    </div>
  );
}
