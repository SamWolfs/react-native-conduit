import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { ArticlePreview } from './src/ui/article/ArticlePreview';
import { ARTICLES } from './assets/articles.js';

// TODO: Under src/pages add ArticlesList.tsx and refactor your code by moving all ArticlesList logic to your new component
// TODO: use react-navigation's createStackNavigator function to build our navigation stack (1 route: Home)
// TODO: use react-navigation's createAppContainer function to create our new app container using the previously created Stack
// TODO: Render AppContainer inside App's container View
// TODO: In ArticlesList.tsx, set your Navigation Bar's title to 'Conduit' using NavigationScreenOptions 

export default function App() {
  const articles: Article[] = ARTICLES;
  const renderItem = ({ item }: { item: Article }): JSX.Element => {
    return (
      <View style={{margin: 8}}>
        <ArticlePreview {...item} />
      </View>
    );
  };

  const RenderSeparator = () => <View style={{ marginHorizontal: 8, borderBottomWidth: 1, borderBottomColor: '#CCC' }}></View>;

  return (
    <View style={styles.container}>
      <FlatList data={articles} renderItem={renderItem} ItemSeparatorComponent={RenderSeparator} keyExtractor={article => article.slug} />
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

type Article = {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  description: string;
  author: Author;
  favorited: boolean;
  favoritesCount: number;
};

type Author = {
  username: string;
  bio?: string;
  image?: string;
  following: boolean;
};
