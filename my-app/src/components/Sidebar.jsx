import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import Grid from "@mui/material/Grid";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <Navbar />
        <Search />

        <Chats />
      </div>
    </>
  );
};
export default Sidebar;
