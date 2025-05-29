"use client";

import { useState } from "react";

import Drawer from "@/app/components/drawer";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RestoreIcon from "@mui/icons-material/Restore";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";

import LinksScreen from "./linksScreen";
import ProfileScreen from "./profileScreen";

export default function DashboardScreen() {
  const [activeItem, setActiveItem] = useState("links");

  const pages = [
    { id: "links", label: "Links", icon: <RestoreIcon /> },
    { id: "profile", label: "Profile", icon: <FavoriteIcon /> },
  ];

  const renderContent = () => {
    if (activeItem === "links") return <LinksScreen />;
    if (activeItem === "profile") return <ProfileScreen />;
  };

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full">
        <Drawer
          activeItem={activeItem}
          pages={pages}
          setActiveItem={setActiveItem}
        />
        <div className="flex-1 p-4 overflow-y-auto pb-14">
          {renderContent()}
        </div>
      </div>

      <Paper
        className="md:hidden"
        elevation={3}
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      >
        <BottomNavigation
          onChange={(event, newValue) => {
            setActiveItem(newValue);
          }}
          showLabels
          value={activeItem}
        >
          {pages.map((page) => (
            <BottomNavigationAction
              icon={page.icon}
              key={page.id}
              label={page.label}
              value={page.id}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </div>
  );
}
