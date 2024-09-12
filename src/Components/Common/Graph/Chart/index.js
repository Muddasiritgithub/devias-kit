import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Importing Chart from chart.js/auto
import { Card, CardContent } from '@mui/material'; // Importing Material-UI components

const BarChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Ref to store the chart instance

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Check if there's an existing chart instance and destroy it
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create new chart instance
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(54, 162, 235, 0.6)', // Light blue
              'rgba(153, 102, 255, 0.6)', // Light purple
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 159, 64, 0.6)',
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)', // Dark blue
              'rgba(153, 102, 255, 1)', // Dark purple
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    // Cleanup function
    return () => {
      // Destroy the chart instance on component unmount
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <Card sx={{ backgroundColor: 'White', Width: 400 }}>
      <CardContent>
        <canvas ref={chartRef} width={300} height={150}></canvas>
      </CardContent>
    </Card>
  );
};

export default BarChart;
