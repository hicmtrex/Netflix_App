import Navbar from "../../../components/navbar/Navbar";
import Featured from "../../../components/featured/Featured";
import "./home.scss";
import List from "../../../components/list/List";
import { useEffect, useState } from "react";
import axiosInstance from "../../../config";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axiosInstance.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
 
  return (
    <>
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List key={list._id} list={list} />
      ))}
      </div>
      <footer className="footer">
        Netflix &copy; 2021
      </footer>
      </>
  );
};

export default Home;