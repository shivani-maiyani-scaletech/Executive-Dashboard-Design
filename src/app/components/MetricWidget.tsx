interface MetricWidgetProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: string;
  color?: string;
}

export function MetricWidget({ title, value, icon, trend, color = 'bg-blue-50' }: MetricWidgetProps) {
  return (
    <div className={`${color} rounded-lg p-4 border border-gray-200`}>
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs text-gray-600 uppercase tracking-wide">{title}</p>
        {icon && <div className="text-gray-600">{icon}</div>}
      </div>
      <p className="text-3xl font-semibold text-gray-900 mb-1">{value}</p>
      {trend && <p className="text-xs text-gray-600">{trend}</p>}
    </div>
  );
}
