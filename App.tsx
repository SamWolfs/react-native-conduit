import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ArticlesListPage from './src/pages/ArticlesList';
import { ArticleDetail } from './src/pages/ArticleDetail';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducks';

export default function App() {
  const Stack = createStackNavigator({
    Home: {
      screen: ArticlesListPage
    },
    Article: {
      screen: ArticleDetail
    }
  });

  const store = createStore(reducer);
  
  const AppContainer = createAppContainer(Stack);
  
  return (
    <Provider store={store}>
      <AppContainer /> 
    </Provider>
  );
}
