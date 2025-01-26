// import classes from "./App.module.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import StudentsPage from "./pages/Students";
// import RootLayout from "./pages/RootLayout";
// import DashboardPage from "./pages/Dashboard";
// import ErorPage from "./pages/Error";
// import StudentProfile from "./components/StudentProfile";
// import AddStudent from "./pages/AddStudent";
// import Login from "./pages/Login";
// import PrivateRoute from "./components/PrivateRoute";
// import {
//   studentsLoader,
//   studentDetailsLoader,
// } from "../src/loaders/studentLoaders";
// import {
//   addNewStudentAction,
//   deleteStudentAction,
//   editStudentAction,
// } from "./loaders/studentActions";
// import { dashboardLoader } from "./loaders/dashboardLoader";
// import EditStudentPage from "./pages/EditStudent";
// import { loginAction, logoutAction } from "./loaders/authActions";

// const router = createBrowserRouter([
//   {
//     path: "/login",
//     element: <Login />,
//     action: loginAction,
//   },
//   {
//     path: "/logout",
//     action: logoutAction,
//   },

//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <ErorPage />,
//     children: [
//       {
//         path: "/",
//         element: (
//           <PrivateRoute>
//             {" "}
//             <DashboardPage />{" "}
//           </PrivateRoute>
//         ),
//         loader: dashboardLoader,
//       },
//       {
//         path: "students",
//         element: (
//           <PrivateRoute>
//             {" "}
//             <StudentsPage />{" "}
//           </PrivateRoute>
//         ),
//         loader: studentsLoader,
//         children: [
//           {
//             path: ":studentId",
//             element: (
//               <PrivateRoute>
//                 {" "}
//                 <StudentProfile />{" "}
//               </PrivateRoute>
//             ),
//             loader: studentDetailsLoader,
//             action: deleteStudentAction,
//           },
//           {
//             path: ":studentId/edit",
//             element: (
//               <PrivateRoute>
//                 {" "}
//                 <EditStudentPage />{" "}
//               </PrivateRoute>
//             ),
//             loader: studentDetailsLoader,
//             action: editStudentAction,
//           },
//         ],
//       },
//       {
//         path: "students/addStudent",
//         element: (
//           <PrivateRoute>
//             {" "}
//             <AddStudent />{" "}
//           </PrivateRoute>
//         ),
//         action: addNewStudentAction,
//       },
//     ],
//   },
// ]);

// function App() {
//   return (
//     <div className={classes.app}>
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;

import classes from "./App.module.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StudentsPage from "./pages/Students";
import RootLayout from "./pages/RootLayout";
import DashboardPage from "./pages/Dashboard";
import ErorPage from "./pages/Error";
import StudentProfile from "./components/StudentProfile";
import AddStudent from "./pages/AddStudent";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
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
import EditStudentPage from "./pages/EditStudent";
import { loginAction, logoutAction } from "./loaders/authActions";
import { rootLoader } from "./loaders/rootLoader";

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
            <AddStudent />
          </PrivateRoute>
        ),
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
