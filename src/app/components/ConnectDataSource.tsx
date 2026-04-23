import { useState } from "react";
import { useNavigate } from "react-router";
import { Activity, CheckCircle, Radio } from "lucide-react";

export function ConnectDataSource() {
  const navigate = useNavigate();
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnected(true);
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Activity className="w-8 h-8 text-[var(--kaiku-blue)]" />
          <h1 className="text-3xl">Connect Data Source</h1>
        </div>
        <p className="text-gray-600 mb-8">
          Securely connect your Meltwater account to enable real-time media monitoring
        </p>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-8">
          {!isConnected ? (
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Radio className="w-10 h-10 text-[var(--kaiku-blue)]" />
              </div>
              <h3 className="mb-2">Connect to Meltwater</h3>
              <p className="text-gray-600 mb-6">
                Authorize Kaiku to access your Meltwater account for real-time data synchronization
              </p>
              <button
                onClick={handleConnect}
                className="bg-[var(--kaiku-blue)] text-white px-8 py-3 rounded-lg hover:bg-[var(--kaiku-blue-dark)] transition-colors"
              >
                Connect Meltwater Account
              </button>
            </div>
          ) : (
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="mb-2 text-green-600">Successfully Connected</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <p className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Connected to Meltwater
                </p>
                <p className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Data syncing enabled
                </p>
              </div>
              <p className="text-gray-600">Redirecting to dashboard...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
