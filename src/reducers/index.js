import user from "./user";
import books from "./books";
import movies from "./movies";

const reducers = {
  ...user,
  ...books,
  ...movies
};

const reducer = (state, action) => {
  const handler = reducers[action.type];
  if (!handler) {
    throw new Error("invalid type: " + action.type);
  }
  return handler(state, action);
};

export default reducer;
