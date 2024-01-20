import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";

export default function Header() {
  let location = useLocation();
  const isDashboard = "/dashboard"
  switch(location.pathname){
    case isDashboard:
        break
    default:{
        return (
            <header className="bg-emerald-800 sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-800 lg:pt-3 lg:pb-3 lg:pe-20 lg:ps-20 md:pt-3 md:pb-3 md:pe-8 md:ps-8 p-3">
              <Logo />
              <Nav />
            </header>
          );
    }
  }
}
