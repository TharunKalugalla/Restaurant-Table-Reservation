import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/page_not_found";
import Layout from "./layout/Layout";
import AuthLayout from "./layout/AuthLayout";
import Loging from "./pages/Loging";

export default function RouterContainer() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route
            path="/auth/login"
            element={<Loging />}
          />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}