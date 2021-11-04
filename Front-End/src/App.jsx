import "./App.css";
import { Route, Switch } from 'react-router';
import { Users, Login, Tasks } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/user" component={Users} />
        <Route path="/task" component={Tasks} />
      </Switch>
    </div>
  );
}

export default App;
