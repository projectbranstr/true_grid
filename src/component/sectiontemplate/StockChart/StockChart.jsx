import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StockChart = () => {
  // Chart.js data structure
  const data = [
    { name: 'Jan', value: 120 },
    { name: 'Feb', value: 200 },
    { name: 'Mar', value: 150 },
    { name: 'Apr', value: 180 },
    { name: 'May', value: 250 }
  ];
  const chartData = {
    labels: data.map(d => d.name), // The labels for the x-axis
    datasets: [
      {
        label: 'Value',  // Label for the dataset
        data: data.map(d => d.value), // The values for the bars
        backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Bar color
        borderColor: 'rgba(75, 192, 192, 1)',  // Border color
        borderWidth: 1  // Border width
      }
    ]
  };

  // Chart.js options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Tesla',
      },
      tooltip: {
        callbacks: {
          // Customize tooltips
          label: function (context) {
            return `${context.label}: ${context.raw}`;
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true
      },
      y: {
        beginAtZero: true
      }
    }
  };

  return <Bar data={chartData} options={options} />;
};

export default StockChart;
