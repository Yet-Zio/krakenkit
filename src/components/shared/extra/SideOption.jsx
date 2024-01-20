import {
  BarChart,
  Bell,
  Brush,
  FlaskConical,
  Settings,
  Star,
  Wallet,
} from "lucide-react";
import React from "react";

const SideIcon = (sideopt) => {
  switch (sideopt) {
    case "dashboard":
      return <BarChart className="text-gray-300" />;
    case "earnings":
      return <Wallet className="text-gray-300" />;
    case "notifications":
      return <Bell className="text-gray-300" />;
    case "favourites":
      return <Star className="text-gray-300" />;
    case "theme":
      return <Brush className="text-gray-300" />;
    case "preview":
      return <FlaskConical className="text-gray-300" />;
    case "settings":
      return <Settings className="text-gray-300" />;
  }
};

export default function SideOption(props) {
  const activePage = props.activePage
  const pageFunc = props.pageFunc;
  return (
    <div onClick={() => { pageFunc(props.option)}} className={`flex ms-2 mb-5 w-8 h-8 sm:w-16 sm:h-16 justify-center sm:justify-center hover:bg-neutral-400/20 hover:border border-transparent rounded-full lg:justify-start lg:rounded-full lg:ps-2 lg:w-full lg:h-10 items-center ${activePage === props.option ? "bg-neutral-400/20" : ""}`}>
      {SideIcon(props.option)}
      <div className="hidden font-sans text-gray-300 font-light ms-5 lg:flex">
        {props.name}
      </div>
    </div>
  );
}
