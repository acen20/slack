import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import React from "react";
import { useStateValue } from "./stateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    /*BEM naming convention*/
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app-body">
              <Sidebar />
              {/*use switch where the content will change*/}
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/"></Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
