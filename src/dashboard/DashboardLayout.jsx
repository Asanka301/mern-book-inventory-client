import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./Side-Bar";

function DashboardLayout() {
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <div className="w-64">
        <SideBar />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
