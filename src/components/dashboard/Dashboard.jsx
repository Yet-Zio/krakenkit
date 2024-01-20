import React, { useState } from "react";
import Sidebar from "../shared/Sidebar";
import DashboardHome from "./DashboardHome";
import Notifications from "./Notifications"
import Favourites from "./Favourites"
import Theme from "./Theme"
import Preview from "./Preview"
import Settings from "./Settings"

import Earnings from "./Earnings";

const renderDashPage = (pageToRender) => {
  console.log("Page to render:", pageToRender);
  switch (pageToRender) {
    case "dashboard":
      return <DashboardHome />;
    case "earnings":
      return <Earnings />;
    case "notifications":
      return <Notifications/>;
    case "favourites":
      return <Favourites />;
    case "theme":
      return <Theme />;
    case "preview":
      return <Preview />;
    case "settings":
      return <Settings />;
    default:
      return <DashboardHome />;
  }
};

export default function Dashboard() {
  const [pageToRender, setPageToRender] = useState("dashboard");
  return (
    <div className="flex w-full h-full">
      <Sidebar pageFunc={setPageToRender} />
      {renderDashPage(pageToRender)}
    </div>
  );
}
