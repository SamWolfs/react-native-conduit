import React from 'react';
import { View, FlatList } from 'react-native';
import { ArticlePreview } from '../ui';
import { ARTICLES } from '../../assets/articles.js';
import { styles } from './ArticlesList.styles';
import { NavigationScreenOptionsGetter } from 'react-navigation';

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

export const ArticlesList: React.FunctionComponent & { navigationOptions?: any } = (): JSX.Element => {
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
