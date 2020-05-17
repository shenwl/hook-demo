import React, { useContext, useEffect } from "react";
import Context from "../context";
import request from "../mock";

export default function Books() {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    request("/books").then(books => dispatch({ type: "setBooks", books }));
  }, []);
  return (
    <div>
      <h1>我的书籍</h1>
      <ol>
        {(state.books || []).map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ol>
    </div>
  );
}
