import Sidebar from "@/components/shared/Sidebar";
import React from "react";
import Navbar from '@/components/shared/Navbar'
interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="relative">
      <Sidebar />
      <Navbar />
      <div className="ml-64 mt-20">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
