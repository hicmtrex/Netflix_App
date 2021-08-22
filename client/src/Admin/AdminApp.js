import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import MovieList from "./pages/movieList/MovieList";
import Movie from "./pages/movie/Movie";
import NewMovie from "./pages/newMovie/newMovie";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import "./App.css"
import ListList from "./pages/listList/listList";
import List from "./pages/list/List";
import NewList from "./pages/newList/newList";
// AuthContext
import { AuthContextProvider } from './context/authContext/AuthContext';
import { MovieContextProvider } from './context/movieContext/MovieContext';
import { ListContextProvider } from "./context/listContext/ListContext";



function AdminApp() {

  const { user } = useContext(AuthContext)
  
  return (
    <Router>
      <AuthContextProvider>
        <MovieContextProvider>
          <ListContextProvider>
            <Switch>
              <Route path="/login"> {user ? <Redirect to="/admin" /> : <Login />} </Route>
              {user && (
                <>
                  <Topbar />
                  <div className="container">
                    <Sidebar />
                    <Route exact path="/admin">
                      <Home />
                    </Route>
                    <Route path="/users" component={UserList} />
                    <Route path="/user/:userId" component={User} />
                    <Route path="/newUser" component={NewUser} />
                    <Route path="/movies/admin" component={MovieList} />
                    <Route path="/movie/:movieId" component={Movie} />
                    <Route path="/newproduct" component={NewMovie} />
                    <Route path="/lists" component={ListList} />
                    <Route path="/list/:listId" component={List} />
                    <Route path="/newList" component={NewList} />
                  </div>
                </>
              )}
 
            </Switch>
          </ListContextProvider>
        </MovieContextProvider>
      </AuthContextProvider>
    </Router>
  );
};

export default AdminApp;
