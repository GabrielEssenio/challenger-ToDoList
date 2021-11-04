import "./App.css";
import { Route, Switch } from "react-router";
import { User, Login, Tasks } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/user" component={User} />
        <Route path="/login" component={Login} />
        <Route path="/task" component={Tasks} />
      </Switch>
    </div>
  );
}

export default App;
