import { Reducer } from "react";
import { Article } from "../data";

// Action Types
const LOAD_ARTICLE_LIST = 'conduit/article/LOAD_ARTICLE_LIST';
const LOAD_ARTICLE_LIST_SUCCESS = 'conduit/article/LOAD_ARTICLE_LIST_SUCCESS';
const LOAD_ARTICLE_LIST_FAIL = 'conduit/article/LOAD_ARTICLE_LIST_FAIL';
const LOAD_ARTICLE_DETAIL = 'conduit/article/LOAD_ARTICLE_DETAIL';
const LOAD_ARTICLE_DETAIL_SUCCESS = 'conduit/article/LOAD_ARTICLE_DETAIL_SUCCESS';
const LOAD_ARTICLE_DETAIL_FAIL = 'conduit/article/LOAD_ARTICLE_LIST_FAIL';

type GetListAction = {
  type: typeof LOAD_ARTICLE_LIST,
  payload: any
};

type GetListActionSuccess = {
  type: typeof LOAD_ARTICLE_LIST_SUCCESS,
  payload: { data: Article[] }
}

type GetListActionFail = {
  type: typeof LOAD_ARTICLE_LIST_FAIL,
  payload: []
}

type GetDetailAction = {
  type: typeof LOAD_ARTICLE_DETAIL,
  payload: { slug: string }
};

type GetDetailActionSuccess = {
  type: typeof LOAD_ARTICLE_DETAIL_SUCCESS,
  payload: { data: Article }
}

type GetDetailActionFail = {
  type: typeof LOAD_ARTICLE_DETAIL_FAIL,
  payload: {}
}

type ActionTypes = GetListAction | GetListActionSuccess | GetListActionFail | GetDetailAction | GetDetailActionSuccess | GetDetailActionFail;

// State Type
type ArticleState = {
  list: Article[],
  isLoadingList: boolean,
  detail: Article,
  isLoadingDetail: boolean
}

// Reducer
const reducer: Reducer<ArticleState, ActionTypes> = (
  state = { list: [], isLoadingList: true, detail: null, isLoadingDetail: true }, action
) => {
  switch (action.type) {
    case LOAD_ARTICLE_LIST: {
      return { ...state, isLoadingList: true };
    }
    case LOAD_ARTICLE_LIST_SUCCESS: {
      return { ...state, list: action.payload.data, isLoadingList: false }
    }
    case LOAD_ARTICLE_LIST_FAIL: {
      return { ...state, isLoadingList: false }
    }
    case LOAD_ARTICLE_DETAIL: {
      return { ...state, isLoadingDetail: true };
    }
    case LOAD_ARTICLE_DETAIL_SUCCESS: {
      return { ...state, detail: action.payload.data, isLoadingDetail: false }
    }
    case LOAD_ARTICLE_LIST_FAIL: {
      return { ...state, isLoadingDetail: false }
    }
    default: return state;
  }
};

// Action Creators
export const getArticleList = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://conduit.productionready.io/api/articles`);
      const { articles }: { articles: Article[] } = await response.json();
      dispatch(getArticleListSuccess(articles));
    } catch (error) {
      dispatch(getArticleListFail())
    }
  }
}

const getArticleListSuccess = (articles: Article[]) => {
  return {
    type: LOAD_ARTICLE_LIST_SUCCESS,
    payload: { data: articles }
  }
}

const getArticleListFail = () => {
  return {
    type: LOAD_ARTICLE_LIST_FAIL,
    payload: {}
  }
}

export const getArticle = (slug: string) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://conduit.productionready.io/api/articles/${slug}`);
      const { article }: { article: Article } = await response.json();
      dispatch(getArticleSuccess(article));
    } catch (error) {
      dispatch(getArticleFail())
    }
  }
}

const getArticleSuccess = (article: Article) => {
  return {
    type: LOAD_ARTICLE_DETAIL_SUCCESS,
    payload: { data: article }
  }
}

const getArticleFail = () => {
  return {
    type: LOAD_ARTICLE_DETAIL_FAIL,
    payload: {}
  }
}

export default reducer;