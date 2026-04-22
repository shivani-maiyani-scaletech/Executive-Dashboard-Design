import { Filter } from 'lucide-react';

export function FilterBar() {
  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Filters:</span>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Client:</label>
            <select className="border border-gray-300 rounded px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Clients</option>
              <option>McDonald's Finland</option>
              <option>Nokia Finland</option>
              <option>Fazer Finland</option>
              <option>Finnair</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Time Range:</label>
            <select className="border border-gray-300 rounded px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Last 24h</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Custom</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Region:</label>
            <select className="border border-gray-300 rounded px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Regions</option>
              <option>Finland</option>
              <option>Sweden</option>
              <option>Norway</option>
              <option>Denmark</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Source Type:</label>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                News
              </button>
              <button className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                Social
              </button>
              <button className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                Blogs
              </button>
            </div>
          </div>

          <button className="ml-auto text-sm text-blue-600 hover:text-blue-700 font-medium">
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}
