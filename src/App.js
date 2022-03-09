import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Auth from "./pages/Auth";
import { connect } from "react-redux";
import getUser from "./utils/getuser";
import getContacts from "./utils/get_contacts";
import Cookies from "js-cookie";
import Logout from "./pages/Logout";
function App({ setUser, setContacts }) {
  React.useEffect(() => {
    if (Cookies.get("AUTH_TOKEN")) {
      getUser()
        .then((user) => {
          console.log(user);
          setUser(user);
        })
        .catch((e) => {
          console.log(e);
        });

      // fetch all contacts for the user

      getContacts()
        .then((contacts) => {
          console.log(contacts);
          setContacts(contacts);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/logout">
            <Logout />
          </Route>

          <Route
            exact
            path="/auth/:type"
            render={(props) => {
              const type = props.match.params.type;
              return <Auth type={type && type} />;
            }}
          />
        </Switch>
      </div>
    </Router>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch({ type: "SET_USER", user }),
  setContacts: (contacts) => dispatch({ type: "SET_CONTACTS", contacts }),
});
export default connect(null, mapDispatchToProps)(App);
