import { HashRouter as Router, Route, Switch} from "react-router-dom";
import SignIn from "./components/FormSignIn";
import SignUp from "./components/FormSignUp";
import Header from "./components/Header";
import HomePage from "./components/HomePage";


function App() {
  return (
    <div className="App">
        <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
