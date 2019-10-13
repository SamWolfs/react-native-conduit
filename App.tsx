import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ArticlesListPage from './src/pages/ArticlesList';
import ArticleDetailPage from './src/pages/ArticleDetail';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducks';
import thunk from 'redux-thunk';

export default function App() {
  const Stack = createStackNavigator({
    Home: {
      screen: ArticlesListPage
    },
    Article: {
      screen: ArticleDetailPage
    }
  });

  const store = createStore(reducer, applyMiddleware(thunk));
  
  const AppContainer = createAppContainer(Stack);
  
  return (
    <Provider store={store}>
      <AppContainer /> 
    </Provider>
  );
}
