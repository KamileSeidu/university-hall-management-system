import classes from "./App.module.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StudentsPage from "./pages/Students";
import RootLayout from "./pages/RootLayout";
import DashboardPage from "./pages/Dashboard";
import ErorPage from "./pages/Error";
import StudentProfile from "./components/StudentProfile";
import AddStudentPage from "./pages/AddStudent";
import Login from "./pages/Login";
import KeyLogsPage from "./pages/key-log/KeyLogs";
import PrivateRoute from "./components/PrivateRoute";
import PersonnelsPage from "./pages/personnel/Personnels";
import AddPersonnelPage from "./pages/personnel/AddPersonnel";
import EditStudentPage from "./pages/EditStudent";
import EditPersonnelPage from "./pages/personnel/EditPersonnel";
import {
  studentsLoader,
  studentDetailsLoader,
} from "../src/loaders/studentLoaders";
import {
  addNewStudentAction,
  deleteStudentAction,
  editStudentAction,
} from "./loaders/studentActions";
import { dashboardLoader } from "./loaders/dashboardLoader";
import { loginAction, logoutAction } from "./loaders/authActions";
import { rootLoader } from "./loaders/rootLoader";
import {
  addNewPersonnelAction,
  editPersonnelAction,
} from "./loaders/personnel/nssPersonnelAction";
import { personnelsLoader } from "./loaders/personnel/nssPersonnelLoader";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    action: loginAction,
  },
  {
    path: "/logout",
    action: logoutAction,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <RootLayout />
      </PrivateRoute>
    ),
    errorElement: <ErorPage />,
    loader: rootLoader, // Add rootLoader to the root route
    children: [
      {
        index: true,
        element: <DashboardPage />,
        loader: dashboardLoader,
      },
      {
        path: "students",
        element: (
          <PrivateRoute>
            <StudentsPage />
          </PrivateRoute>
        ),
        loader: studentsLoader,
        children: [
          {
            path: ":studentId",
            element: (
              <PrivateRoute>
                <StudentProfile />
              </PrivateRoute>
            ),
            loader: studentDetailsLoader,
            action: deleteStudentAction,
          },
          {
            path: ":studentId/edit",
            element: (
              <PrivateRoute>
                <EditStudentPage />
              </PrivateRoute>
            ),
            loader: studentDetailsLoader,
            action: editStudentAction,
          },
        ],
      },
      {
        path: "students/addStudent",
        element: (
          <PrivateRoute>
            <AddStudentPage />
          </PrivateRoute>
        ),
        action: addNewStudentAction,
      },
      {
        path: "nss-personnels",
        element: (
          <PrivateRoute>
            <PersonnelsPage />
          </PrivateRoute>
        ),
        loader: personnelsLoader,
      },
      {
        path: "nss-personnels/addPersonnel",
        element: (
          <PrivateRoute>
            <AddPersonnelPage />
          </PrivateRoute>
        ),
        action: addNewPersonnelAction,
      },
      {
        path: "nss-personnels/:personnelId/edit",
        element: (
          <PrivateRoute>
            <EditPersonnelPage />
          </PrivateRoute>
        ),
        action: editPersonnelAction,
        loader: personnelsLoader,
      },
      {
        path: "key-logs",
        element: (
          <PrivateRoute>
            <KeyLogsPage />
          </PrivateRoute>
        ),
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
