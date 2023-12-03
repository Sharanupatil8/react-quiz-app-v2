import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-center space-x-4 pb-4 pt-3 pt-md-10">
      <img src="logo192.png" alt="React Logo" className="h-20 w-auto" />
      <h1 className="text-slate-400  font-bold">React Quiz</h1>
    </header>
  );
}

export default Header;
