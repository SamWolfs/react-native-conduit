import React from 'react';
import { View, FlatList } from 'react-native';
import { ArticlePreview } from '../ui';
import { ARTICLES } from '../../assets/articles.js';
import { styles } from './ArticlesList.styles';
import { NavigationStackOptions } from 'react-navigation-stack';

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

// TODO: Use the useNavigation hook (src/hooks) to add navigation to the ArticlesList component
// TODO: Write a function `navigateArticle` that navigates to the Article route, passing slug as a param {slug: slug}
// TODO: Under src/pages create a new component ArticleDetail.tsx; for now let it display the slug you passed to it through the navigator
// TODO: You can get route params through the navigation object of your component

export const ArticlesList: React.FunctionComponent & { navigationOptions?: NavigationStackOptions } = (): JSX.Element => {
  const articles: Article[] = ARTICLES;
  const renderItem = ({ item }: { item: Article }): JSX.Element => {
    return (
      <View style={styles.articleContainer}>
        <ArticlePreview {...item} />
      </View>
    );
  };

  const RenderSeparator = () => <View style={styles.separator}></View>;

  return (
    <FlatList data={articles} renderItem={renderItem} ItemSeparatorComponent={RenderSeparator} keyExtractor={article => article.slug} />
  );
};

ArticlesList.navigationOptions = {
  title: 'Conduit',
  headerStyle: {
    backgroundColor: '#5CB85C'
  },
  headerTitleStyle: {
    color: '#FFF'
  }
};
