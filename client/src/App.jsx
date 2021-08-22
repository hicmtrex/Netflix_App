import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
//Components
import Home from "./components/pages/home/Home";
import Watch from "./components/pages/watch/Watch";
import Register from "./components/pages/register/Register";
import Login from "./components/pages/login/Login";
import MovieInfo from "./components/pages/Info/MovieInfo";
import { AuthContext } from "./authContext/AuthContext";
import AdminApp from "./Admin/AdminApp";
import "./app.scss"

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="register" />}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="register" />}
        </Route>
        <Route path="/login">
          {!user ? <Login /> : <Redirect to="/" />}
        </Route>
        {user && (
          <>
            <Route path="/movies">
              <Home type="movies" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/watch" component={Watch} />
            <Route path="/info" component={MovieInfo} />
            <Route path="/admin" component={AdminApp} />
          </>
        )}

      </Switch>
    </Router>
  );
};

export default App;
