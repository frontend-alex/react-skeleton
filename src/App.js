import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./routes/_auth/AuthLayout";
import RootLayout from "./routes/_root/RootLayout";

import { Login } from "./routes/_auth/index";
import { Dashboard } from "./routes/_root/index";

const App = () => {
  return (
    <div>
      <Routes>
        {/* public routes no authentication needed */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
        </Route>

        {/* private routes authentication is required */}
        <Route element={<RootLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
