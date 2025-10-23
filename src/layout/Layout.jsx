import Footer from "@/components/footer";
import Navigation from "@/components/Navigation";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen w-full bg-[#F5F5F7]">
      <Navigation />
      <main className="max-w-[1440px] mx-auto">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default Layout;