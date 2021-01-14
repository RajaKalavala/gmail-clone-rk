import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mail from "./Mail/Mail";
import EmailList from "./EmailList/EmailList";
import SendMail from "./SendMail/SendMail";

function App() {
  return (
    <Router>
      <div className="app">
        <Header></Header>
        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>

        <SendMail />
      </div>
    </Router>
  );
}

export default App;
