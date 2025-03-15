import { Outlet } from "react-router-dom";
import React from 'react';
import LeftSidebar from './LeftSidebar.jsx'
const MainLayout = () => {
  return (
    <div >
      <LeftSidebar/>
      
      <Outlet /> {/* This renders the child component (e.g., Home) */}
    </div>
  );
};

export default MainLayout;
