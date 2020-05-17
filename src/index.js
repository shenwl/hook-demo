import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import Context from "./context";
import User from "./components/user";
import Books from "./components/books";
import Movies from "./components/movies";
import store from "./store";
import reducer from "./reducers";

export default function App() {
  // useReducer只能执行在函数中
  const [state, dispatch] = useReducer(reducer, store);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <User />
      <hr />
      <Books />
      <Movies />
    </Context.Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
