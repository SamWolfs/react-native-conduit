import { Reducer } from "react";
import { ARTICLES } from '../../assets/articles.js';

const articles = ARTICLES;

// TODO: Create action type for *getting* an article detail. Remember Redux Ducks naming: <app-name>/<reducer-name>/<ACTION_TYPE>

const reducer: Reducer<any, any> = (
  state = { list: articles }, action
) => {
  switch (action.type) {
    // TODO: Add reducer case for handling the article detail getter
    default: return state;
  }
};

// TODO: Define an Action Creator for the article detail action type (`getDetail`)
// Remember: an action creator is a regular function that accepts an optional payload and returns an Action = { type: string, payload: Object }
// TODO: (optional) if you have extra time, take a look at https://redux.js.org/recipes/usage-with-typescript and add strong typing to your ActionTypes, Reducers and State

export default reducer;