import { Reducer } from "react";
import { ARTICLES } from '../../assets/articles.js';

const articles = ARTICLES;

const reducer: Reducer<any, any> = (
  state = { list: articles }, action
) => {
  switch (action.type) {
    default: return state;
  }
};

export default reducer;