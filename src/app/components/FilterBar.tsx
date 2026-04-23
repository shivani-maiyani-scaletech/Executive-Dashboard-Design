import { Filter, Settings } from 'lucide-react';
import { useNavigate } from 'react-router';

export function FilterBar() {
    const navigate = useNavigate();
  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Top Section - Client Info and Status */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label className="text-lg font-semibold text-gray-900">Client:</label>
              <select className="cursor-pointer bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-200 transition-colors">
                <option>McDonald's Finland</option>
                <option>Nokia Finland</option>
                <option>Fazer Finland</option>
                <option>Finnair</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-green-700 font-medium">Monitoring Active</span>
            </div>
          </div>
          <div className="bg-blue-50 px-3 py-1.5 rounded-md">
            <span className="text-sm text-orange-600 font-medium animate-pulse">2 active pulse require attention</span>
          </div>
        </div>

        {/* Bottom Section - Filter Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
          <select className="cursor-pointer bg-gray-100 border border-gray-300 rounded-lg pl-4 pr-8 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-200 transition-colors mr-4">
            <option>Time Range</option>
            <option>Last 24h</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Custom</option>
          </select>

          <select className="bg-gray-100 cursor-pointer border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-200 transition-colors">
            <option>Region</option>
            <option>All Regions</option>
            <option>Finland</option>
            <option>Sweden</option>
            <option>Norway</option>
            <option>Denmark</option>
          </select>

          <select className="bg-gray-100 cursor-pointer border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-200 transition-colors">
            <option>Source Type</option>
            <option>News</option>
            <option>Social</option>
            <option>Blogs</option>
          </select>

          <button className="flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 transition-colors">
            <Filter className="w-4 h-4" />
            More Filters
          </button>
          </div>
          

          <button
              onClick={() => navigate("/client-management")}
              className="flex cursor-pointer items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Settings className="w-4 h-4" />
              Client Management
            </button>
        </div>
      </div>
    </div>
  );
}
