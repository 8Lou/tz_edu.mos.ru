import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import Chart from "chart.js/auto";
import data from "../data/data";

const DoughnutChart = ({ data }) => {
  const chartRef = useRef();
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    try {
      const transformedData = data.map((entry) => {
        return {
          competence: entry.name,
          skills: entry.mainSkills.concat(entry.otherSkills),
        };
      });

      if (!data || data.length === 0) {
        throw new Error("Data is empty or undefined");
      }

      if (chartInstance) {
        chartInstance.destroy();
      }

      const chartData = {
        labels: transformedData.map((entry) => entry.competence),
        datasets: [
          {
            data: transformedData.map((entry) => entry.skills.length),
            backgroundColor: [
              "#FFA500",
              "#DDA0DD",
              "#FF6347",
              "#00CED1",
              "#FF4500",
              "#FFD700",
            ],
          },
        ],
      };

      const config = {
        type: "doughnut",
        data: chartData,
        options: {
          cutout: "80%",
          radius: "80%",
          aspectRatio: 1,
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      };

      const newChartInstance = new Chart(chartRef.current, config);
      setChartInstance(newChartInstance);

      return () => {
        newChartInstance.destroy();
      };
    } catch (error) {
      console.error("Error while generating chart:", error);
    }
  }, [data]);

  return (
    <div className="canvas">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default DoughnutChart;
