import { useState } from "react";
import { useNavigate } from "react-router";
import { Activity, ArrowRight } from "lucide-react";

interface ClientData {
  clientName: string;
  industry: string;
  region: string;
  keywords: string;
  campaignKeywords: string;
  highRiskTopics: string;
  mediumRiskTopics: string;
}

export function OnboardClient() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    clientName: "",
    industry: "",
    region: "",
    keywords: "",
    campaignKeywords: "",
    highRiskTopics: "",
    mediumRiskTopics: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save client data to localStorage
    const clientData: ClientData = {
      clientName: formData.clientName,
      industry: formData.industry,
      region: formData.region,
      keywords: formData.keywords,
      campaignKeywords: formData.campaignKeywords,
      highRiskTopics: formData.highRiskTopics,
      mediumRiskTopics: formData.mediumRiskTopics,
    };
    
    // Store in localStorage
    localStorage.setItem('selectedClient', JSON.stringify(clientData));
    
    // Navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[var(--background)] p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Activity className="w-8 h-8 text-[var(--kaiku-blue)]" />
          <h1 className="text-3xl">Onboard New Client</h1>
        </div>
        <p className="text-gray-600 mb-8">
          Configure monitoring and connect data sources to start tracking communication signals
        </p>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow border border-gray-200 p-6 space-y-8">
          <div>
            <h3 className="mb-4 pb-2 border-b border-gray-200">Basic Info</h3>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-gray-700">Client Name</label>
                <input
                  type="text"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--kaiku-blue)] bg-white"
                  placeholder="e.g., McDonald's Finland"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-gray-700">Industry</label>
                  <input
                    type="text"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--kaiku-blue)] bg-white"
                    placeholder="e.g., Fast Food"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-700">Region</label>
                  <input
                    type="text"
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--kaiku-blue)] bg-white"
                    placeholder="e.g., Finland"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 pb-2 border-b border-gray-200">Monitoring Configuration</h3>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-gray-700">Keywords (brand + variations)</label>
                <input
                  type="text"
                  value={formData.keywords}
                  onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--kaiku-blue)] bg-white"
                  placeholder="e.g., McDonald's, McDonalds, Mäkkäri"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Campaign Keywords</label>
                <input
                  type="text"
                  value={formData.campaignKeywords}
                  onChange={(e) => setFormData({ ...formData, campaignKeywords: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--kaiku-blue)] bg-white"
                  placeholder="e.g., summer menu, new burger"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 pb-2 border-b border-gray-200">Risk Configuration</h3>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-gray-700">High-Risk Topics</label>
                <input
                  type="text"
                  value={formData.highRiskTopics}
                  onChange={(e) => setFormData({ ...formData, highRiskTopics: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--kaiku-blue)] bg-white"
                  placeholder="e.g., hygiene, safety, food poisoning"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Medium-Risk Topics</label>
                <input
                  type="text"
                  value={formData.mediumRiskTopics}
                  onChange={(e) => setFormData({ ...formData, mediumRiskTopics: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--kaiku-blue)] bg-white"
                  placeholder="e.g., service, wait times, quality"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-[var(--kaiku-blue)] text-white py-3 rounded-lg hover:bg-[var(--kaiku-blue-dark)] transition-colors flex items-center justify-center gap-2"
          >
            Next: Connect Data Source
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
