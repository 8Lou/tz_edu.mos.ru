import React, { useEffect, useRef, useState }  from 'react';
import './index.css';
import Chart from 'chart.js/auto';


const DoughnutChart = ({ data }) => {
  const chartRef = useRef();const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }

    const chartData = {
      labels: data.map(entry => entry.name),
      datasets: [{
        data: data.map(entry => entry.mainSkills.length + entry.otherSkills.length),
        backgroundColor: ['orange', 'purple', 'green', 'blue', 'red', 'yellow', 'pink', 'brown', 'gray', 'teal'],
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