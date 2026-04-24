import { useEffect, useRef } from 'react';
import { createWordCloud, disposeWordCloud } from '../../assets/wordcloud';

interface WordCloudData {
  text: string;
  value: number;
}

interface WordCloudChartProps {
  data: WordCloudData[];
}

export function WordCloudChart({ data }: WordCloudChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Convert data format to match amCharts expected format
      const amChartsData = data.map(item => ({
        tag: item.text,
        count: item.value
      }));

      // Create word cloud
      chartInstanceRef.current = createWordCloud(chartRef.current, amChartsData);
    }

    // Cleanup on unmount
    return () => {
      if (chartInstanceRef.current) {
        disposeWordCloud(chartInstanceRef.current);
      }
    };
  }, [data]);

  return (
    <div className="w-full h-80">
      <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
