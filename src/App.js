import React, { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/routes/About";
import Home from "./components/routes/Home";
import { StateContext, reducer, initialState, init } from "./state/State.js";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Router>
        <div>
          <Switch>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </div>
      </Router>
    </StateContext.Provider>
  );
}

export default App;
