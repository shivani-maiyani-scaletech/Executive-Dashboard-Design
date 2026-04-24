/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Import amCharts modules
import * as am4core from '@amcharts/amcharts4/core';
import * as am4plugins_wordCloud from '@amcharts/amcharts4/plugins/wordCloud';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

// Themes begin
am4core.useTheme(am4themes_animated);

// Function to create word cloud
/**
 * @param {HTMLElement} container - The container element
 * @param {Array} data - The word cloud data array
 * @returns {Object} - The amCharts word cloud instance
 */
export function createWordCloud(container, data) {
  var chart = am4core.create(container, am4plugins_wordCloud.WordCloud);
  chart.fontFamily = "Courier New";
  var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
  series.randomness = 0.1;
  series.rotationThreshold = 0.5;

  series.data = data;

  series.dataFields.word = "tag";
  series.dataFields.value = "count";

  // Set up multiple colors for words
  const colors = [
    am4core.color("#FF6B6B"),
    am4core.color("#4ECDC4"),
    am4core.color("#45B7D1"),
    am4core.color("#96CEB4"),
    am4core.color("#FFEAA7"),
    am4core.color("#DDA0DD"),
    am4core.color("#98D8C8"),
    am4core.color("#F7DC6F"),
    am4core.color("#BB8FCE"),
    am4core.color("#85C1E2")
  ];

  // Apply colors to labels
  series.labels.template.adapter.add("fill", function(fill, target) {
    const index = target.dataItem.index;
    return colors[index % colors.length];
  });

  series.labels.template.url = "https://stackoverflow.com/questions/tagged/{word}";
  series.labels.template.urlTarget = "_blank";

  var subtitle = chart.titles.create();
  subtitle.text = ""

  var title = chart.titles.create();
  title.text = ""
  title.fontSize = 20;
  title.fontWeight = "800";

  return chart;
}

// Function to dispose chart
export function disposeWordCloud(chart) {
  if (chart) {
    chart.dispose();
  }
}
