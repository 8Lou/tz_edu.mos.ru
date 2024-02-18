import React, { useEffect, useRef, useState }  from 'react';
import './index.css';
import Chart from 'chart.js/auto';
import data from '../data/data';

const transformedData = data.map(entry => {
  return {
    competence: entry.name,
    skills: entry.mainSkills.concat(entry.otherSkills)
  };
});

const DoughnutChart = ({ data }) => {
  const chartRef = useRef();
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }

    const chartData = {
      labels: transformedData.map(entry => entry.competence),
      datasets: [{
        data: transformedData.map(entry => entry.skills.length),
        backgroundColor: ["#FFA500", "#DDA0DD", "#FF6347", "#00CED1", "#FF4500", "#FFD700"],
      }]
    };

    const config = {
      type: 'doughnut',
      data: chartData,
      options: {
        cutout: '80%',
        radius: '80%',
        aspectRatio: 1,
        plugins: {
          legend: {
            display: false,
          }
        }
      }
    };

    const newChartInstance = new Chart(chartRef.current, config);
    setChartInstance(newChartInstance);

    return () => {
      newChartInstance.destroy();
    };

  }, [data]);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default DoughnutChart;