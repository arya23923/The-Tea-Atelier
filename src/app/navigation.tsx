import React, { ReactNode } from 'react';
import Navbar from "./components/Navigation/Navbar"; 

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      
        <Navbar />
        
      
      <main>{children}</main>
    </>
  );
};

export default Layout;
