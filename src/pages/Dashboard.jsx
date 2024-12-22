import HallBlocks from "../components/HallBlocks";
import StudentsOverview from "../components/StudentsOverview";
import classes from "./Dashboard.module.css";
import { useLoaderData } from "react-router-dom";

function DashboardPage() {
  const hallData = useLoaderData();

  return (
    <div className={classes.container}>
      <StudentsOverview students={hallData.students} />
      <HallBlocks hallBlocks={hallData.hallBlocks} />
    </div>
  );
}

export default DashboardPage;
