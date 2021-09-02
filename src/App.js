import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="bookstore-container">
      <Router>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/user" exact component={UserForm} />
      </Router>
    </div>
  );
}

export default App;
