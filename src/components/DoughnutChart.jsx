import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function DonutGraph({ blockData }) {
  // Transform blockData into chart-compatible format
  const chartData = {
    labels: blockData.map((block) => block.blockLetter),
    datasets: [
      {
        label: "Number of Students",
        data: blockData.map((block) => block.studentCount),
        backgroundColor: [
          "rgba(255, 99, 132, 0.3)",
          "rgba(54, 162, 235, 0.3)",
          "rgba(75, 192, 192, 0.3)",
          "rgba(255, 206, 86, 0.3)",
          "rgba(153, 102, 255, 0.3)",
          "rgba(255, 159, 64, 0.3)",
          "rgba(201, 203, 207, 0.3)",
          "rgba(100, 181, 246, 0.3)",
          "rgba(118, 255, 3, 0.3)",
          "rgba(255, 87, 51, 0.3)",
          "rgba(63, 81, 181, 0.3)",
          "rgba(255, 223, 186, 0.3)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(201, 203, 207, 1)",
          "rgba(100, 181, 246, 1)",
          "rgba(118, 255, 3, 1)",
          "rgba(255, 87, 51, 1)",
          "rgba(63, 81, 181, 1)",
          "rgba(255, 223, 186, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={chartData} />;
}

export default DonutGraph;
