import classes from "./App.module.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StudentsPage from "./pages/Students";
import RootLayout from "./pages/RootLayout";
import DashboardPage from "./pages/Dashboard";
import ErorPage from "./pages/Error";
import StudentProfile from "./components/StudentProfile";
import { loader as studentLoader } from "./pages/Students";

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
        loader: studentLoader,
      },
      {
        path: "students/:studentId",
        element: <StudentProfile />,
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
