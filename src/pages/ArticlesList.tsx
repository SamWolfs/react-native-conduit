import React, { useContext } from 'react';
import { View, FlatList } from 'react-native';
import { ArticlePreview } from '../ui';
import { ARTICLES } from '../../assets/articles.js';
import { styles } from './ArticlesList.styles';
import { NavigationScreenProp, NavigationParams, NavigationContext, NavigationRoute } from 'react-navigation';
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

const useNavigation = () => {
  return useContext(NavigationContext) as NavigationScreenProp<
  NavigationRoute,
  NavigationParams
>;
};


export const ArticlesList: React.FunctionComponent & { navigationOptions?: NavigationStackOptions} = (): JSX.Element => {
  const articles: Article[] = ARTICLES;
  const navigation = useNavigation();
  const navigateArticle = (slug: string) => navigation.navigate('Article', {slug: slug});

  const renderItem = ({ item }: { item: Article }): JSX.Element => {
    return (
      <View style={styles.articleContainer}>
        <ArticlePreview {...item} navigateArticle={navigateArticle} />
      </View>
    );
  };

  const RenderSeparator = () => <View style={styles.separator}></View>;

  return (
    <FlatList data={articles} renderItem={renderItem} ItemSeparatorComponent={RenderSeparator} keyExtractor={article => article.slug} />
  );
};

ArticlesList.navigationOptions = () => ({
  title: 'Conduit',
  headerStyle: {
    backgroundColor: '#5CB85C'
  },
  headerTitleStyle: {
    color: '#FFF'
  }
});
