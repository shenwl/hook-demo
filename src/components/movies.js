import React, { useContext, useEffect } from "react";
import Context from "../context";
import request from "../mock";

export default function Movies() {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    request("/movies").then(movies => dispatch({ type: "setMovies", movies }));
  }, []);
  return (
    <div>
      <h1>我的电影</h1>
      <ol>
        {(state.movies || []).map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ol>
    </div>
  );
}
