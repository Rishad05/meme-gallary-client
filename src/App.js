import "./App.css";
import ManageMeme from "./Compnent/ManageMeme/ManageMeme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Compnent/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/deleteMeme">
          <ManageMeme></ManageMeme>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
