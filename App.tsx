import React, { useEffect } from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ArticlesListPage from './src/pages/ArticlesList';
import ArticleDetailPage from './src/pages/ArticleDetail';
import CreateArticlePage from './src/pages/CreateArticle';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducks';
import thunk from 'redux-thunk';
import { loginUser } from './src/reducks/user';

// TODO: Create new file in the src/ui directory named CircledImage.tsx
// TODO: Build a custom component `CircledImage` that uses the built-in <Image>-element and accepts a size and an optional image link and style
// https://facebook.github.io/react-native/docs/image
// TODO: Add a TypeScript type or interface for your component props
// TODO: Use `https://static.productionready.io/images/smiley-cyrus.jpg` as fallback image in case non is provided
// TODO (optional): Barrel your exports in an index.ts file under the src/ui directory

export default function App() {
  const Stack = createStackNavigator({
    Home: {
      screen: ArticlesListPage
    },
    Article: {
      screen: ArticleDetailPage
    },
    CreateArticle: {
      screen: CreateArticlePage
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
