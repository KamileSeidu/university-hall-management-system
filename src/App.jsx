import classes from "./App.module.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StudentsPage from "./pages/Students";
import RootLayout from "./pages/RootLayout";
import DashboardPage from "./pages/Dashboard";
import ErorPage from "./pages/Error";
import StudentProfile from "./components/StudentProfile";
import {
  studentsLoader,
  studentDetailsLoader,
} from "../src/loaders/studentLoaders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErorPage />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "students",
        element: <StudentsPage />,
        loader: studentsLoader,
        children: [
          {
            path: ":studentId",
            element: <StudentProfile />,
            loader: studentDetailsLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div className={classes.app}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
