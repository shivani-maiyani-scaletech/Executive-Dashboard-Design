interface AIInsightBoxProps {
  title: string;
  content: string;
  icon?: string;
  color?: string;
}

export function AIInsightBox({
  title,
  content,
  icon = '🤖',
  color = 'bg-blue-50 border-blue-200 text-blue-900'
}: AIInsightBoxProps) {
  return (
    <div className={`${color} border rounded-lg p-4`}>
      <div className="flex items-start gap-2 mb-2">
        <span className="text-xl">{icon}</span>
        <p className="font-semibold">{title}</p>
      </div>
      <p className="text-sm text-gray-700 ml-8">{content}</p>
    </div>
  );
}
