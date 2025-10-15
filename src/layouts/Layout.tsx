import React from "react";
import { Outlet } from "react-router";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <header className="mb-10 italic">
        <h1>ParriFM</h1>
      </header>
      <main className="h-[26rem] flex items-center justify-center w-full">
        <Outlet />
      </main>
      <footer className="mt-10 text-sm">Made with 💙 by Fede Parrilla</footer>
    </div>
  );
};

export default Layout;
