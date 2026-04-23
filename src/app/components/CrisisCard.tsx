import { AlertCircle, TrendingUp, Users, Clock, Hash, MessageCircle, Share2, Radio } from 'lucide-react';

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
  engagement
}: CrisisCardProps) {
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
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded font-medium">
              {client}
            </span>
            <span className={`${severityBadgeColors[severity]} text-white text-xs px-2 py-1 rounded-full uppercase tracking-wide`}>
              {severity}
            </span>
            <AlertCircle className="w-4 h-4 text-gray-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
        </div>
      </div>

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
                {hashtags.map((tag, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                  >
                    <Hash className="w-3 h-3" />
                    {tag.replace("#", "")}
                  </span>
                ))}
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
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
        <div>
          <p className="text-gray-600">Source</p>
          <p className="font-medium text-gray-900">{source}</p>
        </div>
        <div>
          <p className="text-gray-600">Source Type</p>
          <p className="font-medium text-gray-900">{sourceType}</p>
        </div>
        <div>
          <p className="text-gray-600">Published</p>
          <p className="font-medium text-gray-900">{published}</p>
        </div>
        <div>
          <p className="text-gray-600">Sentiment</p>
          <p className="font-medium text-gray-900">{sentiment}</p>
        </div>
        <div>
          <p className="text-gray-600">Reach</p>
          <p className="font-medium text-gray-900">{reach}</p>
        </div>
        <div>
          <p className="text-gray-600">Mentions</p>
          <p className="font-medium text-gray-900">{mentions}</p>
        </div>
      </div> */}

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

      <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 mb-4">
        <div className="flex items-start gap-2 mb-2">
          <span className="text-cyan-600">🎯</span>
          <p className="font-semibold text-cyan-900">Recommended Response</p>
        </div>
        <p className="text-gray-700 text-sm ml-6">{recommendation}</p>
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
  );
}
