import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineGraph({ frequencyMap }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Registrations Progress Chart",
      },
    },
  };
  // Step 2: Prepare chart data
  const chartData = {
    labels: Object.keys(frequencyMap), // Dates (MM-DD format)
    datasets: [
      {
        label: "Registrations",
        data: Object.values(frequencyMap), // Frequency values
        cubicInterpolationMode: "monotone",
        backgroundColor: "rgba(109, 7, 64, 0.21)",
        borderColor: "rgba(181, 89, 99, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Log the chart data for testing
  // console.log(chartData);

  return <Line options={options} data={chartData} />;
}
