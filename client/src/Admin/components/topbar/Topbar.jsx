import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar__admin">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Netflix</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://scontent.ftun15-1.fna.fbcdn.net/v/t1.6435-9/148093688_403937590704051_5489728707453114564_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=gAeDRWF9Aq0AX-_9igi&_nc_ht=scontent.ftun15-1.fna&oh=9471fe9b8b7b4f28cc94827a0d0961e1&oe=61423BBA" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
