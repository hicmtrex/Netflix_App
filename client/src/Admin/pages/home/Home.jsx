import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import axiosInstance from "../../../config";


export default function Home() {
  const Months = useMemo(
    () => [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Dec"
    ],[]
  );
  const [userStats, setUserStats] = useState([])
  
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axiosInstance.get("/users/stats", {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWIwNDZiODQ3OTBjNDM0MDAxYjgzMSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MjkxNjA1NzYsImV4cCI6MTYyOTU5MjU3Nn0.syScIkAPzNNGlvlKQNmTcowt0CdnxZ6xzgILFDcHEms"
          }
        });
       
        const statsList = res.data.sort(function (a, b) {
         return a._id - b._id
      })  
      statsList.map(item => setUserStats(prev => [...prev,{name:Months[item._id -1], "New User" : item.total}]))
      } catch (error) {
        console.log(error);
      }
    }
    getStats()
  },[Months])
  return (
    <div className="home__admin">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets__admin">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
