// import { ExternalLink, TrendingUp } from 'lucide-react';
// import { AIInsightBox } from './AIInsightBox';

// export function MediaCoverageTab() {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//       <div className="bg-white rounded-lg border border-gray-200 p-6">
//         <h3 className="text-lg font-semibold text-gray-900 mb-4">Media Coverage Analysis – Hygiene Issue</h3>

//         <div className="space-y-4">
//           <div className="border-b border-gray-200 pb-4">
//             <div className="flex items-start justify-between mb-2">
//               <h4 className="font-semibold text-gray-900">Helsinki McDonald's Faces Hygiene Complaints</h4>
//               <ExternalLink className="w-4 h-4 text-gray-400" />
//             </div>
//             <div className="grid grid-cols-2 gap-2 text-sm mb-2">
//               <div>
//                 <span className="text-gray-600">Source:</span>
//                 <span className="ml-2 font-medium">Helsinki Daily News</span>
//               </div>
//               <div>
//                 <span className="text-gray-600">Author:</span>
//                 <span className="ml-2 font-medium">Maria Virtanen</span>
//               </div>
//               <div>
//                 <span className="text-gray-600">Published:</span>
//                 <span className="ml-2 font-medium">2 hours ago</span>
//               </div>
//               <div>
//                 <span className="text-gray-600">URL:</span>
//                 <span className="ml-2 text-blue-600 text-xs">helsinkidaily.fi/news...</span>
//               </div>
//             </div>
//             <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded">
//               "Multiple customers have reported hygiene concerns at the McDonald's Helsinki central outlet.
//               The restaurant chain has not yet issued an official statement..."
//             </p>
//           </div>

//           <div className="border-b border-gray-200 pb-4">
//             <div className="flex items-start justify-between mb-2">
//               <h4 className="font-semibold text-gray-900">Fast Food Chain Under Scrutiny</h4>
//               <ExternalLink className="w-4 h-4 text-gray-400" />
//             </div>
//             <div className="grid grid-cols-2 gap-2 text-sm mb-2">
//               <div>
//                 <span className="text-gray-600">Source:</span>
//                 <span className="ml-2 font-medium">YLE News</span>
//               </div>
//               <div>
//                 <span className="text-gray-600">Author:</span>
//                 <span className="ml-2 font-medium">Jukka Lahtinen</span>
//               </div>
//               <div>
//                 <span className="text-gray-600">Published:</span>
//                 <span className="ml-2 font-medium">3 hours ago</span>
//               </div>
//               <div>
//                 <span className="text-gray-600">URL:</span>
//                 <span className="ml-2 text-blue-600 text-xs">yle.fi/uutiset...</span>
//               </div>
//             </div>
//             <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded">
//               "Health inspection authorities have been notified about potential hygiene violations
//               at a Helsinki McDonald's location. Investigation ongoing..."
//             </p>
//           </div>

//           <div className="pb-4">
//             <div className="flex items-start justify-between mb-2">
//               <h4 className="font-semibold text-gray-900">Social Media Outcry Over Restaurant Conditions</h4>
//               <ExternalLink className="w-4 h-4 text-gray-400" />
//             </div>
//             <div className="grid grid-cols-2 gap-2 text-sm mb-2">
//               <div>
//                 <span className="text-gray-600">Source:</span>
//                 <span className="ml-2 font-medium">Twitter/X</span>
//               </div>
//               <div>
//                 <span className="text-gray-600">Author:</span>
//                 <span className="ml-2 font-medium">@HelsinkiFoodie</span>
//               </div>
//               <div>
//                 <span className="text-gray-600">Published:</span>
//                 <span className="ml-2 font-medium">1 hour ago</span>
//               </div>
//               <div>
//                 <span className="text-gray-600">Engagement:</span>
//                 <span className="ml-2 font-medium">2.3K reactions</span>
//               </div>
//             </div>
//             <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded">
//               "Shocking conditions at McDonald's Helsinki. Food safety standards seem to have dropped.
//               #FastFood #Helsinki #FoodSafety"
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="space-y-4">
//         <AIInsightBox
//           title="AI Summary"
//           content="Hygiene-related issue at McDonald's Helsinki outlet gaining traction across media. Multiple news sources and social media platforms reporting similar concerns."
//           icon="🤖"
//           color="bg-blue-50 border-blue-200"
//         />

//         <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
//           <div className="flex items-start gap-2 mb-3">
//             <span className="text-xl">🧠</span>
//             <p className="font-semibold text-purple-900">Why This Matters</p>
//           </div>
//           <ul className="space-y-2 ml-8 text-sm text-gray-700">
//             <li className="flex items-start gap-2">
//               <span className="text-red-500">•</span>
//               <span>Negative sentiment detected across multiple sources</span>
//             </li>
//             <li className="flex items-start gap-2">
//               <span className="text-red-500">•</span>
//               <span>Hygiene-related keyword (high-risk topic for food industry)</span>
//             </li>
//             <li className="flex items-start gap-2">
//               <span className="text-red-500">•</span>
//               <span>High reach media coverage (85K+ potential audience)</span>
//             </li>
//             <li className="flex items-start gap-2">
//               <span className="text-red-500">•</span>
//               <span>Multiple sources reporting independently</span>
//             </li>
//           </ul>
//         </div>

//         <div className="bg-white border border-gray-200 rounded-lg p-4">
//           <div className="flex items-center gap-2 mb-3">
//             <TrendingUp className="w-5 h-5 text-gray-700" />
//             <p className="font-semibold text-gray-900">Media Distribution</p>
//           </div>
//           <div className="space-y-2">
//             <div className="flex justify-between items-center">
//               <span className="text-sm text-gray-600">News Articles</span>
//               <span className="font-semibold text-gray-900">3</span>
//             </div>
//             <div className="flex justify-between items-center">
//               <span className="text-sm text-gray-600">Social Media Posts</span>
//               <span className="font-semibold text-gray-900">2</span>
//             </div>
//             <div className="flex justify-between items-center">
//               <span className="text-sm text-gray-600">Blog Posts</span>
//               <span className="font-semibold text-gray-900">0</span>
//             </div>
//           </div>
//         </div>

//         <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
//           <div className="flex items-center gap-2 mb-3">
//             <TrendingUp className="w-5 h-5 text-orange-700" />
//             <p className="font-semibold text-orange-900">Trend Analysis</p>
//           </div>
//           <div className="space-y-2 text-sm">
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-red-500 rounded-full"></span>
//               <span className="text-gray-700">Increasing mention volume</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-red-500 rounded-full"></span>
//               <span className="text-gray-700">Spike detected in last 2 hours</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
//               <span className="text-gray-700">Cross-platform spread (news + social)</span>
//             </div>
//           </div>
//         </div>

//         <AIInsightBox
//           title="Recommended Response"
//           content="Issue official clarification statement. Engage with media if required. Monitor social sentiment closely for next 24 hours. Consider proactive outreach to health authorities."
//           icon="🎯"
//           color="bg-cyan-50 border-cyan-200"
//         />

//         <div className="bg-white border border-gray-200 rounded-lg p-4">
//           <p className="font-semibold text-gray-900 mb-3">Response Actions</p>
//           <div className="space-y-2">
//             <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
//               Assign Issue
//             </button>
//             <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50 transition-colors">
//               Add Notes
//             </button>
//             <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50 transition-colors">
//               Mark Resolved
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { Hash, TrendingUp, Sparkles, Target } from "lucide-react";

const pulses = [
  { id: 1, title: "Hygiene Issue – Helsinki Outlet", mentions: 5, sentiment: "Negative" },
  { id: 2, title: "Service Quality Complaint – Espoo", mentions: 3, sentiment: "Negative" },
];

export function MediaCoverageTab() {
  const [selectedPulse, setSelectedPulse] = useState(pulses[0]);

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
        <h3 className="mb-4 pb-3 border-b border-gray-200">Active Pulses</h3>
        <div className="space-y-2">
          {pulses.map((pulse) => (
            <div
              key={pulse.id}
              onClick={() => setSelectedPulse(pulse)}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                selectedPulse.id === pulse.id
                  ? "border-[var(--kaiku-blue)] bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="text-sm font-medium mb-1">{pulse.title}</div>
              <div className="flex items-center gap-3 text-xs text-gray-600">
                <span>{pulse.mentions} mentions</span>
                <span className="text-red-600">{pulse.sentiment}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-2 bg-white rounded-lg shadow border border-gray-200 p-6">
        <h3 className="mb-6 pb-3 border-b border-gray-200">Pulse Details</h3>

        <div className="space-y-6">
          <div>
            <h4 className="text-sm mb-3">Timeline</h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-[var(--kaiku-blue)] rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <div className="text-sm font-medium">Initial mention on Twitter/X</div>
                  <div className="text-xs text-gray-600">2 hours ago</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-[var(--kaiku-blue)] rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <div className="text-sm font-medium">Reshared by local news outlet</div>
                  <div className="text-xs text-gray-600">1.5 hours ago</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <div className="text-sm font-medium">Spike detected in engagement</div>
                  <div className="text-xs text-gray-600">45 minutes ago</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-[var(--kaiku-blue)] flex-shrink-0" />
              <div className="font-medium text-[var(--kaiku-blue)]">Why This Matters</div>
            </div>
            <p className="text-sm text-gray-700">
              Hygiene-related issues have the highest viral potential in the fast food industry. Historical
              data shows these incidents can reach 10x+ normal engagement if not addressed within the first
              4 hours.
            </p>
          </div>

          <div>
            <h4 className="text-sm mb-3">Breakdown</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-xs text-gray-600 mb-1">Associated Hashtags</div>
                <div className="flex flex-wrap gap-1 mt-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-white text-xs rounded">
                    <Hash className="w-3 h-3" />
                    cleanliness (2)
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-white text-xs rounded">
                    <Hash className="w-3 h-3" />
                    foodsafety (3)
                  </span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-xs text-gray-600 mb-1">Engagement</div>
                <div className="text-2xl">1.2K</div>
                <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  +45% from avg
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-xs text-gray-600 mb-1">Distribution</div>
                <div className="text-xs mt-2 space-y-1">
                  <div>News: 2</div>
                  <div>Social: 2</div>
                  <div>Blog: 1</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start gap-2 mb-2">
              <Target className="w-5 h-5 text-green-600 flex-shrink-0" />
              <div className="font-medium text-green-900">Recommended Response</div>
            </div>
            <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
              <li>Issue immediate public acknowledgment within 2 hours</li>
              <li>Share corrective actions taken at the specific outlet</li>
              <li>Engage directly with original poster</li>
              <li>Monitor conversation velocity for next 6 hours</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
