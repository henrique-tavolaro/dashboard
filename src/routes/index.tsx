import { Route, Routes } from "react-router-dom"
import useAuth from "../hooks/useAuth";
import { useDataContext } from "../hooks/useDataContext";

import { DashboardPage } from "../pages/dashboard";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";

import { Navigate } from "react-router-dom";
import { ChangePasswordPage } from "../pages/change-password";
import { useEffect } from "react";


export const ProtectedRoute = ({ children }: any) => {



  const { user } = useAuth();

  useEffect(() => {

  }, [user])

  if (!user) {

    return <Navigate to="/" />;
  }
  return children;
};

export const AdminProtectedRoute = ({children} : any) => {
  const { user } = useAuth()


  if(!user || user.company !== "MeteoIA"){

    return <Navigate to="/" />;
  }
  return children;
}

export default function AppRoutes() {

  const { data } = useDataContext();
  const { user } = useAuth()

  return (

    <Routes>
      <>
        <Route path="/" element={<LoginPage />} />
        <Route path="/changepassword" element={<ProtectedRoute><ChangePasswordPage /></ProtectedRoute>} />
        <Route path="/index" element={<ProtectedRoute><HomePage companyName={`${data?.companyName}`} user={user!} /></ProtectedRoute>} />
        {data?.graficos?.map((e, index) => (
          <Route key={index} path={`/${data.companyName}/${e.graphName}`} element={<ProtectedRoute><DashboardPage
            header={e.graphName}
            index={index} /></ProtectedRoute>} />
        )
        )}
      </>
    </Routes>

  );
}

