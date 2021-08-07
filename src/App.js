import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";

function App() {
  return (
    /*BEM naming convention*/
    <div className="App">
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
