import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { ArticlesList } from './src/pages/ArticlesList';
import { ArticleDetail } from './src/pages/ArticleDetail';

// TODO: Install the redux and react-redux dependencies: `npm i redux react-redux`
// TODO: Under the src/reducks directory take a look at article.ts and index.ts and see if you understand the code; article.ts shows a basic reducer without any associated actions (yet), 
// index.ts is another barrel file that will import our reducers and combine them into a single rootReducer (exported as default) to be used by our store

export default function App() {
  const Stack = createStackNavigator({
    Home: {
      screen: ArticlesList
    },
    Article: {
      screen: ArticleDetail
    }
  });

  // TODO: Create a Redux store by using redux's `createStore` function and passing our reducer from src/reducks as argument
  
  const AppContainer = createAppContainer(Stack);
  
  // TODO: Replace the <View> wrapper with react-redux's `<Provider>` wrapper, passing the store as single prop

  return (
    <View style={styles.container}>
      <AppContainer /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});

