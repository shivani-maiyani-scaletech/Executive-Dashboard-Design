import { AlertCircle, TrendingUp, Users, Clock, Hash, MessageCircle, Share2, Radio, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface CrisisCardProps {
  severity: 'critical' | 'attention' | 'positive';
  client: string;
  title: string;
  source: string;
  sourceType: string;
  published: string;
  sentiment: string;
  reach: string;
  mentions: number;
  aiSummary: string;
  aiInsight?: string;
  newsmentions?: number;
  socialMentions?: number;
  blogMentions?: number;
  trendStatus?: string;
  trendLabel?: string;
  recommendation: string;
  assignedTo?: string;
  status?: string;
  hashtags: string[];
  reshares?: number;
  engagement?: string;
  worldCloud?: string[];
}

export function CrisisCard({
  severity,
  client,
  title,
  source,
  sourceType,
  published,
  sentiment,
  reach,
  mentions,
  aiSummary,
  aiInsight,
  newsmentions,
  socialMentions,
  blogMentions,
  trendStatus,
  trendLabel,
  recommendation,
  assignedTo,
  status,
  hashtags,
  reshares,
  engagement,
}: CrisisCardProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const severityColors = {
    critical: 'border-red-500 bg-red-50',
    attention: 'border-orange-500 bg-orange-50',
    positive: 'border-green-500 bg-green-50'
  };

  const severityBadgeColors = {
    critical: 'bg-red-500',
    attention: 'bg-orange-500',
    positive: 'bg-green-500'
  };

  const trendColors = {
    'Spike Detected': 'text-red-600',
    'Stable': 'text-gray-600',
    'Increasing': 'text-orange-600'
  };

  return (
    <div className={`border-l-4 ${severityColors[severity]} rounded-lg p-6 shadow-sm mb-4`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className='flex items-center justify-between'>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded font-medium">
              {client}
            </span>
            <span className={`${severityBadgeColors[severity]} text-white text-xs px-2 py-1 rounded-full uppercase tracking-wide`}>
              {severity}
            </span>
            <AlertCircle className="w-4 h-4 text-gray-600" />
          </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center cursor-pointer justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-200 transition-colors"
        >
          {isCollapsed ? (
            <ChevronDown className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronUp className="w-4 h-4 text-gray-600" />
          )}
        </button>
      </div>

{!isCollapsed && (
<div>
<div className="grid grid-cols-4 gap-4 mb-6">
              <div>
                <div className="text-xs text-gray-600 mb-1">Source</div>
                <div className="text-sm font-medium">{source}</div>
              </div>
              <div>
                <div className="text-xs text-gray-600 mb-1">Source Type</div>
                <div className="text-sm font-medium">{sourceType}</div>
              </div>
              <div>
                <div className="text-xs text-gray-600 mb-1">Published</div>
                <div className="text-sm font-medium">{published}</div>
              </div>
              <div>
                <div className="text-xs text-gray-600 mb-1">Sentiment</div>
                <div className="text-sm font-medium text-red-600">{sentiment}</div>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-xs text-gray-600 mb-2">Associated Hashtags</div>
              <div className="flex flex-wrap gap-2">
                {hashtags.map((tag, i) => {
                  const colorShades = [
                    'bg-blue-100 text-blue-700',
                    'bg-purple-100 text-purple-700', 
                    'bg-green-100 text-green-700',
                    'bg-orange-100 text-orange-700',
                    'bg-pink-100 text-pink-700',
                    'bg-cyan-100 text-cyan-700',
                    'bg-indigo-100 text-indigo-700',
                    'bg-teal-100 text-teal-700'
                  ];
                  const colorClass = colorShades[i % colorShades.length];
                  
                  return (
                    <span
                      key={i}
                      className={`flex items-center gap-1 px-2 py-1 text-sm rounded ${colorClass}`}
                    >
                      <Hash className="w-3 h-3" />
                      {tag.replace("#", "")}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h4 className="text-sm mb-3">Conversation Insights</h4>
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
                    <MessageCircle className="w-3 h-3" />
                    Mentions
                  </div>
                  <div className="text-lg">{mentions}</div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
                    <Share2 className="w-3 h-3" />
                    Reshares
                  </div>
                  <div className="text-lg">{reshares}</div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
                    <Radio className="w-3 h-3" />
                    Reach
                  </div>
                  <div className="text-lg">{reach}</div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
                    <TrendingUp className="w-3 h-3" />
                    Engagement
                  </div>
                  <div className="text-lg">{engagement}</div>
                </div>
              </div>
            </div>

</div>
)}

{!isCollapsed && (
<div>
   {(newsmentions !== undefined || socialMentions !== undefined || blogMentions !== undefined || trendStatus) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {(newsmentions !== undefined || socialMentions !== undefined || blogMentions !== undefined) && (
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">Media Spread</p>
              <div className="flex gap-4">
                {newsmentions !== undefined && (
                  <div>
                    <p className="text-sm text-gray-600">News</p>
                    <p className="text-2xl font-semibold text-gray-900">{newsmentions}</p>
                  </div>
                )}
                {socialMentions !== undefined && (
                  <div>
                    <p className="text-sm text-gray-600">Social</p>
                    <p className="text-2xl font-semibold text-gray-900">{socialMentions}</p>
                  </div>
                )}
                {blogMentions !== undefined && (
                  <div>
                    <p className="text-sm text-gray-600">Blogs</p>
                    <p className="text-2xl font-semibold text-gray-900">{blogMentions}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {trendStatus && trendLabel && (
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">Trend Indicator</p>
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4" />
                <p className={`font-semibold ${trendColors[trendStatus as keyof typeof trendColors]}`}>{trendStatus}</p>
              </div>
              <p className="text-sm text-gray-600">{trendLabel}</p>
            </div>
          )}
        </div>
      )}
      <div className='flex gap-5'>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
        <div className="flex items-start gap-2 mb-2">
          <span className="text-blue-600">🤖</span>
          <p className="font-semibold text-blue-900">AI Generated Summary</p>
        </div>
        <p className="text-gray-700 text-sm ml-6">{aiSummary}</p>
      </div>

      {aiInsight && (
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
          <div className="flex items-start gap-2 mb-2">
            <span className="text-purple-600">🧠</span>
            <p className="font-semibold text-purple-900">AI Insight</p>
          </div>
          <p className="text-gray-700 text-sm ml-6">{aiInsight}</p>
        </div>
      )}

      <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 mb-4">
        <div className="flex items-start gap-2 mb-2">
          <span className="text-cyan-600">🎯</span>
          <p className="font-semibold text-cyan-900">Recommended Response</p>
        </div>
        <p className="text-gray-700 text-sm ml-6">{recommendation}</p>
      </div>
      </div>
      {assignedTo && (
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gray-600" />
            <span className="text-gray-600">Assigned to:</span>
            <span className="font-medium text-gray-900">{assignedTo}</span>
          </div>
          {status && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-600" />
              <span className="text-gray-600">Status:</span>
              <span className="font-medium text-blue-600">{status}</span>
            </div>
          )}
        </div>
      )}
</div>
)}

    </div>
  );
}
