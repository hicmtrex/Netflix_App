import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axiosInstance from "../../../config";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUSers = async () => {
      try {
        const res = await axiosInstance.get("/users?new=true", {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWIwNDZiODQ3OTBjNDM0MDAxYjgzMSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MjkxNjA1NzYsImV4cCI6MTYyOTU5MjU3Nn0.syScIkAPzNNGlvlKQNmTcowt0CdnxZ6xzgILFDcHEms"
          }
        })
        setNewUsers(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getNewUSers()
  },[])
  return (
    <div className="widgetSm__admin">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
        <li className="widgetSmListItem">
        <img
          src={user.profilePic || 'https://cdn.drawception.com/drawings/RWDTxl2nrF.png' }
          alt=""
          className="widgetSmImg"
        />
        <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
        </div>
        <button className="widgetSmButton">
          <Visibility className="widgetSmIcon" />
          Display
        </button>
      </li>
        ))}

      </ul>
    </div>
  );
}
