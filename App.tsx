import React, { useEffect } from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ArticlesListPage from './src/pages/ArticlesList';
import ArticleDetailPage from './src/pages/ArticleDetail';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducks';
import thunk from 'redux-thunk';
import { loginUser } from './src/reducks/user';

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

  useEffect(() => {
    //@ts-ignore
    store.dispatch(loginUser({user: { username: 'swo', email: 'swo@asist.be', password: 'swoswoswo' }}));
  }, []);
  
  return (
    <Provider store={store}>
      <AppContainer /> 
    </Provider>
  );
}
