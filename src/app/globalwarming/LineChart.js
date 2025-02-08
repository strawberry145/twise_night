"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";
import Papa from "papaparse";

// Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  zoomPlugin
);

const LineChart = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetch("/assets/data.csv")
        .then((response) => response.text())
        .then((csvText) => {
          const parsedData = Papa.parse(csvText, { header: true });
          const labels = parsedData.data.map((row) => row.Year);
          const data = parsedData.data.map((row) => parseFloat(row.Data));
          const smoothedData = parsedData.data.map((row) =>
            parseFloat(row["Smoothed Data"])
          );

          setChartData({
            labels: labels,
            datasets: [
              {
                label: "Data",
                data: data,
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
              {
                label: "Smoothed Data",
                data: smoothedData,
                fill: false,
                borderColor: "rgb(192, 75, 192)",
                tension: 0.1,
              },
            ],
          });
        });
    }
  }, []);

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Annual Global Temperature Anomaly",
        align: "center",
        font: {
          size: 25,
        },
        color: "#ffffff", // 제목 색상 설정
      },
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
        },
        zoom: {
          drag: {
            enabled: true,
          },
          mode: "x",
          limits: {
            x: { minRange: 1 }, // 최소 확대 범위를 설정하여 너무 많이 확대되지 않도록 제한
          },
        },
      },
    },
  };

  const handleResetZoom = () => {
    if (chartRef.current) {
      chartRef.current.resetZoom();
    }
  };

  return (
    <div
      style={{ textAlign: "center", backgroundColor: "#000", padding: "20px" }}
    >
      {chartData && <Line ref={chartRef} data={chartData} options={options} />}
      <button
        onClick={handleResetZoom}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#ffffff",
          color: "#000",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Reset Zoom
      </button>
    </div>
  );
};

export default LineChart;
