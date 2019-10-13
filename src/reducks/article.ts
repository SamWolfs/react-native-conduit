import { Reducer } from "react";
import { ARTICLES } from '../../assets/articles.js';
import { Article } from "../data";

const articles = ARTICLES;

// Action Types
// TODO: Add 5 more action types: LOAD_ARTICLE_LIST, LOAD_ARTICLE_LIST_SUCCESS, LOAD_ARTICLE_LIST_FAIL, LOAD_ARTICLE_DETAIL_SUCCESS, LOAD_ARTICLE_DETAIL_FAIL
const LOAD_ARTICLE_DETAIL = 'conduit/article/LOAD_ARTICLE_DETAIL';

// TODO: (optional) create typescript types for each action
type GetDetailAction = {
  type: typeof LOAD_ARTICLE_DETAIL,
  payload: { slug: string }
};

type ActionTypes = GetDetailAction;

// State Type
// TODO: add loading state for both list and detail (TIP: isLoadingList, isLoadingDetail) and make sure to set their initial state to true (in reducer constructor)
type ArticleState = {
  list: Article[],
  detail: Article
}

// Reducer
// TODO: Define reducers for all 5 actions
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
// TODO: Define action creators for the SUCCESS & FAIL actions and thunks for the LOAD actions
export const getArticle = (slug: string): ActionTypes => {
  return {
    type: LOAD_ARTICLE_DETAIL,
    payload: { slug }
  }
}

export default reducer;