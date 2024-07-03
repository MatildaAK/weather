import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useUnits } from "../Context/UnitsContext";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface WeatherData {
  title: string;
  icon: string;
  temp: number;
}

interface WeatherChartProps {
  data: WeatherData[];
}

const WeatherChart: React.FC<WeatherChartProps> = ({ data }) => {
  const { units } = useUnits();
  const isCelsius = units === 'metric';

  const convertTemperature = (temp: number) => (isCelsius ? temp : (temp * 9/5) + 32);

  const chartData = {
    labels: data.map((d) => d.title),
    datasets: [
      {
        label: `Temperature (${isCelsius ? '°C' : '°F'})`,
        data: data.map((d) => convertTemperature(d.temp)),
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `Temperature Over Time (${isCelsius ? '°C' : '°F'})`,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default WeatherChart;
