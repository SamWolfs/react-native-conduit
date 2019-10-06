import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ArticlePreview } from './src/ui/article/ArticlePreview';
import { ARTICLES } from './assets/articles.js';

// TODO: Use FlatList and your custom ArticlePreview item to render a list of articles (assets/articles.js)

export default function App() {
  const articles = ARTICLES;
  return (
    <View style={styles.container}>
      <ArticlePreview {...articles[0]} />
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
