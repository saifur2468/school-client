import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Mainlayout from "./Component/Mainlayout";
import Error from "./Component/Error";
import HomePage from "./Component/HomePage";
import Aboutus from "./Component/Aboutus";
import AdmissionPage from "./Component/AdmissionPage";
import AcademicSection from "./Component/AcademicSection";
import AlumniSection from "./Component/AlumniSection";
import ContactSection from "./Component/Contactsection";

import Dashboard from "./Component/Dashboard";
import Signup from "./Component/AuthSection/Signup";
import Login from "./Component/AuthSection/Login";
import AuthProvider from "./Component/AuthProvider";

import PrivateRoute from "./Component/AuthSection/PrivateRoute";
import PostNotice from "./Component/PostNotice";
import SeeNotice from "./Component/SeeNotice";
import AllStudent from "./Component/AllStudent";
import StudentSyllabus from "./Component/AuthSection/StudentSyllabus";
import ClassRoutine from "./Component/ClassRoutine";
import MakeRouting from "./Component/MakeRouting";
import AdminAdmissions from "./Component/Addmissonmanage";
import StudentProfile from "./Component/StudentProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "aboutus",
        element: <Aboutus />,
      },
      {
        path: "AdmissionPage",
        element: <PrivateRoute>
          <AdmissionPage></AdmissionPage>
        </PrivateRoute>
      },
      {
        path: "AcademicSection",
        element: (
          <PrivateRoute>
            <AcademicSection></AcademicSection>
          </PrivateRoute>
        )
      },
      {
  path:"seenotice",
  element:<SeeNotice></SeeNotice>,
      },
      {
        path: "alumni",
        element: <AlumniSection></AlumniSection>
      },
      {
        path: "ContactSection",
        element: <ContactSection></ContactSection>
      },
      {
        path: "signup",
        element: <Signup></Signup>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "Dashboard",
        element: (

          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
         
),
children:[
  {
    path:"Notice",
    element:<PostNotice></PostNotice>
  },
  {
    path:"allstudent",
    element:<AllStudent></AllStudent>

  },
  {
     path:"StudentSyllabus",
     element:<StudentSyllabus></StudentSyllabus>
  },
  {
path:"ClassRoutine",
element:<ClassRoutine></ClassRoutine>,
  },
  {
    path:"MakeRouting",
    element:<MakeRouting></MakeRouting>
  },
  {
    path:"AdminAdmissions",
    element:<AdminAdmissions></AdminAdmissions>
  },
  {
    path:"StudentProfile",
    element:<StudentProfile></StudentProfile>
  }
]
},

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
