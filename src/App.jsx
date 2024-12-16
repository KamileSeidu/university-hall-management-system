import classes from "./App.module.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StudentsPage from "./pages/Students";
import RootLayout from "./pages/RootLayout";
import DashboardPage from "./pages/Dashboard";
import ErorPage from "./pages/Error";
import StudentProfile from "./components/StudentProfile";
import AddStudent from "./pages/AddStudent";
import {
  studentsLoader,
  studentDetailsLoader,
} from "../src/loaders/studentLoaders";
import {
  addNewStudentAction,
  deleteStudentAction,
  editStudentAction,
} from "./loaders/studentActions";
import EditStudentPage from "./pages/EditStudent";

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
            action: deleteStudentAction,
          },
          {
            path: ":studentId/edit",
            element: <EditStudentPage />,
            loader: studentDetailsLoader,
            action: editStudentAction,
          },
        ],
      },
      {
        path: "students/addStudent",
        element: <AddStudent />,
        action: addNewStudentAction,
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
