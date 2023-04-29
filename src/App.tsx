import React, { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { AppLayout, AuthLayout } from "./layouts";
import { DummyPage, HomePage, LoginPage, RegisterPage } from "./containers";
import { AuthContext } from "./contexts";

function App() {
  const {
    state: { isAuthenticated },
  } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(isAuthenticated, "isAuthenticated");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  return isAuthenticated ? (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dummy" element={<DummyPage />} />
      </Routes>
    </AppLayout>
  ) : (
    <AuthLayout>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </AuthLayout>
  );
}

export default App;
