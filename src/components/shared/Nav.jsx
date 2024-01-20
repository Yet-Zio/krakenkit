import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/" className="font-bold hover:text-emerald-100 text-zinc-50">
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="font-bold hover:text-emerald-100 text-zinc-50"
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className="font-bold hover:text-emerald-100 text-zinc-50"
      >
        Contact
      </NavLink>
      <NavLink
        to="/projects"
        className="font-bold hover:text-emerald-100 text-zinc-50"
      >
        Projects
      </NavLink>
    </>
  );
};

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true)

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setIsDark(!isDark)
  } 

  return (
    <>
      <nav className="w-1/3 flex justify-end">
        <div className="hidden w-full justify-evenly lg:flex">
          <NavLinks />
          {isDark ? <Sun className="hover:text-emerald-100 text-white" onClick={toggleTheme}/> : <Moon className="hover:text-emerald-100 text-white" onClick={toggleTheme}/>}
        </div>
        <div className="lg:hidden flex">
          <div className="mr-4">
          {isDark ? <Sun className="hover:text-emerald-100 text-white" onClick={toggleTheme}/> : <Moon className="hover:text-emerald-100 text-white" onClick={toggleTheme}/>}
          </div>
          <button onClick={toggleNavbar}>
            {isOpen ? <X color="white" /> : <Menu color="white" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center basis-full gap-5">
          <NavLinks />
        </div>
      )}
    </>
  );
}
