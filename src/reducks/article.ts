import { Reducer } from "react";
import { ARTICLES } from '../../assets/articles.js';
import { Article } from "../data";

const articles = ARTICLES;

// Action Types
const LOAD_ARTICLE_DETAIL = 'conduit/article/LOAD_ARTICLE_DETAIL';

type GetDetailAction = {
  type: typeof LOAD_ARTICLE_DETAIL,
  payload: { slug: string }
};

type ActionTypes = GetDetailAction;

// State Type
type ArticleState = {
  list: Article[],
  detail: Article
}

// Reducer
const reducer: Reducer<ArticleState, ActionTypes> = (
  state = { list: articles, detail: null }, action
) => {
  switch (action.type) {
    case LOAD_ARTICLE_DETAIL: {
      const article = state.list.find(article => article.slug === action.payload.slug);
      return {...state, detail: article}
    }
    default: return state;
  }
};

// Action Creators
export const getArticle = (slug: string): ActionTypes => {
  return {
    type: LOAD_ARTICLE_DETAIL,
    payload: { slug }
  }
}

export default reducer;